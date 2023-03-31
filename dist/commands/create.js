"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCommand = void 0;
class CreateCommand {
    constructor(program) {
        this.program = program;
    }
    resolve(action) {
        this.program
            .command('create [name]')
            .alias('c')
            .description('Generate Node application.')
            .action(async (name = '', destination) => {
            await action.source('application').resolve(name, destination);
        });
    }
}
exports.CreateCommand = CreateCommand;
//# sourceMappingURL=create.js.map