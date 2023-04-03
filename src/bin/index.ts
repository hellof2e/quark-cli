#!/usr/bin/env node

import program from 'commander';
import { CreateCommand } from '../commands';
import { CreateAction } from '../actions';

program
  .version(require('../../package.json').version, '-v, --version');

new CreateCommand(program)
  .resolve(
    new CreateAction()
  );

program.parse(process.argv);