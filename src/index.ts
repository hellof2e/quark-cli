import prompts from 'prompts';
import minimist from 'minimist';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { red, reset } from 'kolorist';
import figlet from 'figlet';
import chalk from 'chalk';
import sh from 'shelljs';

class ProjectInitiator {
  defaultTargetDir: string;
  cwd: string;
  argv: any;

  constructor(defaultTargetDir: string, cwd: string, argv: any) {
    this.defaultTargetDir = defaultTargetDir;
    this.cwd = cwd;
    this.argv = argv;
  }

  formatTargetDir(targetDir?: string) {
    return targetDir?.trim().replace(/\+$/g, '');
  }

  isEmpty(src: string) {
    const files = fs.readdirSync(src);
    return files.length === 0 || (files.length === 1 && files[0] === '.git');
  }

  copy(src: string, dest: string) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      this.copyDir(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  copyDir(src: string, dest: string) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.resolve(src, file);
      const destFile = path.resolve(dest, file);
      this.copy(srcFile, destFile);
    }
  }

  emptyDir(dir: string) {
    if (!fs.existsSync(dir)) {
      return;
    }
    for (const file of fs.readdirSync(dir)) {
      if (file === '.git') {
        continue;
      }
      fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
    }
  }

  async init() {
    const start = Date.now();
    const argTargetDir = this.formatTargetDir(this.argv._[0]);
    let targetDir = argTargetDir || this.defaultTargetDir;

    let result;

    try {
      result = await prompts(
        [
          {
            type: argTargetDir ? null : 'text',
            name: 'projectName',
            message: reset('project name:'),
            initial: 'my-element',
            onState: (state) => {
              targetDir = this.formatTargetDir(state.value) || this.defaultTargetDir;
            },
          },
          {
            type: () =>
              !fs.existsSync(path.join(this.cwd, targetDir)) ||
              this.isEmpty(path.join(this.cwd, targetDir))
                ? null
                : 'confirm',
            name: 'overwrite',
            message: () =>
              `Target directory ${targetDir}` +
              ` is not empty. Remove existing files and continue?`,
          },
        ],
        {
          onCancel: () => {
            throw new Error(red('✖') + ' Operation cancelled');
          },
        }
      );
    } catch (cancelled) {
      // console.log(cancelled.message);
      return;
    }

    const root = path.join(this.cwd, targetDir);
    const { overwrite } = result;
    if (overwrite) {
      this.emptyDir(root);
    } else {
      fs.mkdirSync(root, { recursive: true });
    }

    const templateDir = path.resolve(
      fileURLToPath(import.meta.url),
      '../../template/application'
    );

    const files = fs.readdirSync(templateDir);
    for (const file of files) {
      const targetPath = path.resolve(root, file);
      if (file === '.git') continue;
      this.copy(path.join(templateDir, file), targetPath);
    }

    figlet('Hello Quark', (err, data) => {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);

      console.log(chalk.hex('#5ce9fa').bold('\nInstalling dependencies...\n'));

      sh.exec(`cd ${path.basename(root)} && npm install && clear`);

      const end = Date.now();
      console.log(`\n ✨ Done in ${(end - start) / 1000}s\n`);

      console.log(`Success!`);
      console.log(`Inside that directory, you can run several commands:\n`);

      console.log(` ${chalk.hex('#5ce9fa').bold('npm run dev')}`);
      console.log(`   Starts the development server.\n`);

      console.log(` ${chalk.hex('#5ce9fa').bold('npm run build')}`);
      console.log(`   Bundles the component into static files for production.\n`);

      console.log(` ${chalk.hex('#5ce9fa').bold('npm run test')}`);
      console.log(`   Starts the test runner.\n`);

      console.log(` We suggest that you begin by typing:\n`);
      console.log(`   ${chalk.hex('#5ce9fa').bold(`\n cd`)} ${path.basename(root)}`);
      console.log(`   ${chalk.hex('#5ce9fa').bold(`\n npm run dev`)}\n`);

      console.log('Happy hacking!');
    });
  }
}

const projectInitiator = new ProjectInitiator('my-element', process.cwd(), minimist(process.argv.slice(2), { string: ['_'] }));

projectInitiator.init().catch((err) => {
  console.log('error', err);
});


