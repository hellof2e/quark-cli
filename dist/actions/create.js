"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAction = void 0;
const lib_1 = require("../lib");
const action_abstract_1 = require("./action.abstract");
class CreateAction extends action_abstract_1.ActionAbstract {
    async resolve(name) {
        console.log(name, 2222);
        const answer = await new lib_1.Question()
            .type()
            .ask();
        const renderer = new lib_1.Render();
        if (answer.type === 'app') {
            renderer.developType('app');
        }
        else {
            renderer.developType('component');
        }
        renderer.source(this._source);
        renderer.destination(name);
        renderer.apply();
        if (answer.pm === 'npm') {
            await new lib_1.NpmRunner()
                .directory(name)
                .run('install');
        }
        else if (answer.pm === 'yarn') {
            await new lib_1.YarnRunner()
                .directory(name)
                .run('install');
        }
        const start = Date.now();
        lib_1.Printer.power(start);
    }
}
exports.CreateAction = CreateAction;
//# sourceMappingURL=create.js.map