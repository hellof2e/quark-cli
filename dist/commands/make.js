"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeCommand = void 0;
class MakeCommand {
    constructor(program) {
        this.program = program;
    }
    resolve(action) {
        this.program
            .command('make:controller [name]')
            .alias('mc')
            .description('New node2sql Controller file.')
            .option('-r, --rest', 'Use Rest API template')
            .option('-p, --path <path>', 'controller path in app dir, default is [controllers]')
            .action(async (name = '', destination) => {
            await action.source('controller').resolve(name, destination);
        });
        this.program
            .command('make:service [name]')
            .alias('ms')
            .description('New node2sql Service file.')
            .action(async (name = '', destination) => {
            await action.source('service').resolve(name, destination);
        });
        this.program
            .command('make:resource [name]')
            .alias('mr')
            .description('New node2sql Resource file.')
            .action(async (name = '', destination) => {
            await action.source('resource').resolve(name, destination);
        });
        this.program
            .command('make:middleware [name]')
            .alias('mm')
            .description('New node2sql Middleware file.')
            .action(async (name = '', destination) => {
            await action.source('middleware').resolve(name, destination);
        });
        this.program
            .command('make:validator [name]')
            .alias('mv')
            .description('New node2sql Validator file.')
            .action(async (name = '', destination) => {
            await action.source('validator').resolve(name, destination);
        });
    }
}
exports.MakeCommand = MakeCommand;
//# sourceMappingURL=make.js.map