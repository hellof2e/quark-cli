import nunjucks from 'nunjucks';
import * as path from 'path';
import * as fs from 'fs';
import glob from 'glob';
import fsExtra from 'fs-extra';
import pluralize from 'pluralize';
import chalk from 'chalk';

type LanguageType = 'ts' | 'js'

export type SourceType = 'application' | 'controller' | 'service' | 'validator' | 'resource' | 'middleware'

export class Render {
  private _sourcePath: SourceType;
  private _destinationPath: string;
  private _language: LanguageType;

  private _env: nunjucks.Environment;
  private _templatePath = path.resolve(__dirname, '../../template')

  private _assigns: object = {};

  constructor() {
    this._env = nunjucks.configure(this._templatePath);
    this._env.addFilter('firstUpperCase', function (str: string) {
      return str.replace(/\b(\w)/g, $1 => $1.toUpperCase());
    });
    this._env.addFilter('plural', function (str: string) {
      return pluralize.plural(str);
    });
  }

  public source(sourcePath: SourceType) {
    
    this._sourcePath = sourcePath;
    return this;
  }

  public destination(destinationPath: string) {
    this._destinationPath = destinationPath;
    return this;
  }

  public language(language: LanguageType) {
    this._language = language;
    return this;
  }
  public assign(name: string, value: any): this
  public assign(name: object): this
  public assign(name: string | object, value?: any) {
    if (typeof name === 'string') {
      this._assigns[name] = value;
    } else {
      this._assigns = {
        ...this._assigns,
        ...name
      };
    }
    return this;
  }

  public make(srcFilename: string, distFilename: string, relationPath = 'app') {
    const sourcePath = path.join(this._templatePath, this._sourcePath, this._language);
    const file = path.join(sourcePath, srcFilename);
    const filename = path.join(
      process.cwd(), // node进程执行时的文件夹地址，工作目录
      'src',
      relationPath,
      this._destinationPath,
      distFilename
    );
    const str = this._env.render(file, this._assigns);

    if (fs.existsSync(filename)) {
      console.log(chalk.red(`file exists!`));
      process.exit(1);
    }

    fsExtra.ensureFileSync(filename);
    fs.writeFileSync(filename, str, {
      encoding: 'utf-8'
    });
  }

  public apply() {
    const sourcePath = path.join(this._templatePath, this._sourcePath, this._language);
    if (fs.existsSync(path.join(process.cwd(), 'package.json'))) {
      console.log(chalk.red(`project has exists!`));
      process.exit(1);
    }
    const files = glob.sync(
      path.join(sourcePath, '**'),
      {
        nodir: true,
        dot: true
      }
    );
    for (const file of files) {
      const filename = path.join(
        process.cwd(),
        this._destinationPath,
        path.relative(sourcePath, file)
      );
      const str = this._env.render(file);
      fsExtra.ensureFileSync(filename);
      fs.writeFileSync(filename, str, {
        encoding: 'utf-8'
      });
    }
  }
}


