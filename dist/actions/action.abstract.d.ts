import { SourceType } from '../lib/render';
import { Command } from 'commander';
export declare abstract class ActionAbstract {
    protected _source: SourceType;
    abstract resolve(name: string, destination: Command): any;
    source(_source: SourceType): this;
}
