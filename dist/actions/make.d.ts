import { ActionAbstract } from './action.abstract';
import { Command } from 'commander';
export declare class MakeAction extends ActionAbstract {
    getFilename(name: string, isTypescript: boolean): string;
    resolve(name: string, destination: Command): void;
}
