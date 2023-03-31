import { CommanderStatic, Command } from 'commander';
import { ActionAbstract } from '../actions';


export class CreateCommand {

  private program: CommanderStatic;

  constructor(program: CommanderStatic) {
    this.program = program;
  }

  resolve(action: ActionAbstract) {
    this.program
      .command('create [name]')
      .alias('c')
      .description('Generate Node application.')
      .action(async (name = '', destination: Command) => {
        await action.source('application').resolve(name, destination);
      });
  }
}