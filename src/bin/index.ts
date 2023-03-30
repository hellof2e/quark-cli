#!/usr/bin/env node

import program from 'commander';
import { CreateCommand, MakeCommand } from '../commands';
import { CreateAction, MakeAction } from '../actions';

program
  .version(require('../../package.json').version, '-v, --version');

new CreateCommand(program)
  .resolve(
    new CreateAction()
  );

new MakeCommand(program)
  .resolve(
    new MakeAction()
  );

program.parse(process.argv);