#!/usr/bin/env node

import prompts from 'prompts';
import minimist from 'minimist';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { red, reset } from 'kolorist';
import figlet from "figlet";
import chalk from "chalk";
import sh from "shelljs";

const defaultTargetDir = 'my-element';
const cwd = process.cwd();
// ['_']对应的参数均为string类型
const argv = minimist(process.argv.slice(2), { string: ['_'] });


// 格式化非法字符串
function formatTargetDir(targetDir) {
  return targetDir?.trim().replace(/\+$/g, '');
}

function copy(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const file of fs.readdirSync(src)) {
    const srcFile = path.resolve(src, file);
    const destFile = path.resolve(dest, file);
    copy(srcFile, destFile);
  }
}

// 校验文件夹是否为空
function isEmpty(src) {
  const files = fs.readdirSync(src);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

function emptyDir(dir) {
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


async function init() {
  const start = Date.now();
  const argTargetDir = formatTargetDir(argv._[0]);
  let targetDir = argTargetDir || defaultTargetDir;

  let result;

  try {
    result = await prompts(
      [{
        type: argTargetDir ? null : 'text',
        name: 'Project name: ',
        message: reset('project name:'),
        initial: 'my-element',
        onState: (state) => {
          targetDir = formatTargetDir(state.value) || defaultTargetDir;
        }
      },
      {
        // 校验文件名不存在或者文件夹为空跳过
        type: () => !fs.existsSync(path.join(cwd, targetDir)) || isEmpty(path.join(cwd, targetDir)) ? null : 'confirm',
        name: 'overwrite',
        message: () => `Target directory ${targetDir}` + ` is not empty. Remove existing files and continue?`
      }
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled');
        }
      }
    );
  } catch (cancelled) {
    console.log(cancelled.message);
    return;
  }


  const root = path.join(cwd, targetDir);
  const { overwrite } = result;
  if (overwrite) {
    emptyDir(root);
  } else {
    fs.mkdirSync(root, { recursive: true });
  }

  const templateDir = path.resolve(fileURLToPath(import.meta.url), '../../template/application');


  const files = fs.readdirSync(templateDir);


  for (const file of files) {
    const targetPath = path.resolve(root, file);
    if (file === '.git') continue;
    copy(path.join(templateDir, file), targetPath);
  }


  // Done! And print hello world.
  figlet('Hello Quark', (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);

    console.log(chalk.hex('#5ce9fa').bold('\nInstalling dependencies...\n'));

    sh.exec(
      `cd ${path.basename(root)} && npm install && clear`
    );

    const end = Date.now();
    console.log(`\n ✨ Done in ${(end - start) / 1000}s\n`);

    console.log(`Success!`)
    console.log(`Inside that directory, you can run several commands:\n`)
    
    console.log(` ${chalk.hex('#5ce9fa').bold('npm run dev')}`)
    console.log(`   Starts the development server.\n`)
    
    console.log(` ${chalk.hex('#5ce9fa').bold('npm run build')}`)
    console.log(`   Bundles the component inro static files for production.\n`)
    
    console.log(` ${chalk.hex('#5ce9fa').bold('npm run test')}`)
    console.log(`   Starts the test runner.\n`)

    console.log(` We suggest that you begin by typing:\n`);
    console.log(`   ${chalk.hex('#5ce9fa').bold(`\n cd`)} ${path.basename(root)}`);
    console.log(`   ${chalk.hex('#5ce9fa').bold(`\n npm run dev`)}\n`);

    console.log('Happy hacking!');
  });
}

init().catch((err) => {
  console.log('error', err);
});