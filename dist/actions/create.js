"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAction = void 0;
const lib_1 = require("../lib");
const action_abstract_1 = require("./action.abstract");
const chalk_1 = __importDefault(require("chalk"));
class CreateAction extends action_abstract_1.ActionAbstract {
    async resolve(projectName) {
        const answer = await new lib_1.Question()
            .type()
            .packageManager()
            .ask();
        const renderer = new lib_1.Render();
        if (answer.type === "app") {
            renderer.developType("app");
        }
        else {
            renderer.developType("component");
        }
        renderer.source(this._source);
        renderer.destination(projectName);
        renderer.apply();
        const startTime = Date.now();
        console.log(chalk_1.default.hex("#5ce9fa").bold("\nInstalling dependencies...\n"));
        if (answer.pm === "npm") {
            await new lib_1.NpmRunner().directory(projectName).run("install");
        }
        else if (answer.pm === "yarn") {
            await new lib_1.YarnRunner().directory(projectName).run("install");
        }
        lib_1.Printer.power(projectName, startTime);
    }
}
exports.CreateAction = CreateAction;
//# sourceMappingURL=create.js.map