import { NpmRunner, Printer, Render, YarnRunner, Question } from '../lib';
import { ActionAbstract } from './action.abstract';

export class CreateAction extends ActionAbstract {

  async resolve(name: string) {
    const answer = await new Question()
      .language()
      .packageManager()
      .ask();

    const renderer = new Render();
    if (answer.lang === 'js') {
      renderer.language('js');
    } else {
      renderer.language('ts');
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

    Printer.power();
  }
}