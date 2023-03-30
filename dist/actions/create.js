"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAction = void 0;
const lib_1 = require("../lib");
const action_abstract_1 = require("./action.abstract");
class CreateAction extends action_abstract_1.ActionAbstract {
    async resolve(name) {
        const answer = await new lib_1.Question()
            .language()
            .packageManager()
            .ask();
        const renderer = new lib_1.Render();
        if (answer.lang === 'js') {
            renderer.language('js');
        }
        else {
            renderer.language('ts');
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
        lib_1.Printer.power();
    }
}
exports.CreateAction = CreateAction;
//# sourceMappingURL=create.js.map