import { NpmRunner, Printer, Render, YarnRunner, Question } from '../lib';
import { ActionAbstract } from './action.abstract';

export class CreateAction extends ActionAbstract {

  async resolve(name: string) {
    console.log(name, 2222);
    
    const answer = await new Question()
      .type()
      // .packageManager()
      .ask();

    const renderer = new Render();
    if (answer.type === 'app') {
      renderer.developType('app');
    } else {
      renderer.developType('component');
    }
    renderer.source(this._source);
    renderer.destination(name);
    renderer.apply();

    if (answer.pm === 'npm') {
      await new NpmRunner()
        .directory(name)
        .run('install');
    } else if (answer.pm === 'yarn') {
      await new YarnRunner()
        .directory(name)
        .run('install');
    }

    const start = Date.now();
    Printer.power(start);
  }
}