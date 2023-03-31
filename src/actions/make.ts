
import { ActionAbstract } from './action.abstract';
import { Command } from 'commander';
import { Render } from '../lib';
import pluralize from 'pluralize';
import chalk from 'chalk';


export class MakeAction extends ActionAbstract { 

  getFilename(name: string, isTypescript: boolean) {
    if (isTypescript) return `${name}.ts`;
    return `${name}.js`;
  }


  resolve(name: string, destination: Command) {
    const renderer = new Render();

    const isTypescript = !!require(`${process.cwd()}/package.json`).devDependencies?.typescript;
    renderer.source(this._source);
    renderer.destination(destination.path ?? pluralize.plural(this._source));
    if (isTypescript) {
      renderer.language('ts');
    } else {
      renderer.language('js');
    }

    renderer.assign({
      name,
    });

    const distname = this.getFilename(name, isTypescript);

    switch(this._source) {
      case 'controller':
        if (destination.rest) {
          renderer.make('rest.njk', distname);
        } else {
          renderer.make('controller.njk', distname);
        }
        break;
      case 'service':
        renderer.make('service.njk', distname);
        break;
      case 'validator':
        renderer.make('validator.njk', distname);
        break;
      case 'middleware':
        renderer.make('middleware.njk', distname);
        break;
      default:
        console.log(
          chalk.red(`Unsupport file template`)
        );
        process.exit(1);
    }
  }
}