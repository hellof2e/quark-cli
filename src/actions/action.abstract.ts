import { SourceType } from '../lib/render';
import { Command } from 'commander';

export abstract class ActionAbstract {
  protected _source: SourceType;

  abstract resolve(name: string, destination: Command): any
  source(_source: SourceType) {
    this._source = _source;
    return this;
  }
}