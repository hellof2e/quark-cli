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

// new MakeCommand(program)
//   .resolve(
//     new MakeAction()
//   );

program.parse(process.argv);