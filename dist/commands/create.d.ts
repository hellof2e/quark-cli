import { CommanderStatic } from 'commander';
import { ActionAbstract } from '../actions';
export declare class CreateCommand {
    private program;
    constructor(program: CommanderStatic);
    resolve(action: ActionAbstract): void;
}
