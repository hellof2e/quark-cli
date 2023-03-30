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
            .description('New Quark Controller file.')
            .option('-r, --rest', 'Use Rest API template')
            .option('-p, --path <path>', 'controller path in app dir, default is [controllers]')
            .action(async (name = '', destination) => {
            await action.source('controller').resolve(name, destination);
        });
    }
}
exports.MakeCommand = MakeCommand;
//# sourceMappingURL=make.js.map