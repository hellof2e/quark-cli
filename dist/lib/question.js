"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
class Question {
    constructor() {
        this.inquirer = inquirer_1.default;
        this.promptList = [];
    }
    type() {
        this.promptList.push({
            type: 'list',
            name: 'type',
            message: 'Which one to use for development?',
            choices: [
                {
                    name: 'component',
                    value: 'component'
                },
                {
                    name: 'app',
                    value: 'app'
                },
            ],
        });
        return this;
    }
    packageManager() {
        this.promptList.push({
            type: 'list',
            name: 'pm',
            message: 'Which package manager you want?',
            choices: [
                {
                    name: 'skip install',
                    value: ''
                },
                {
                    name: 'npm',
                    value: 'npm'
                },
                {
                    name: 'yarn',
                    value: 'yarn'
                },
            ],
        });
        return this;
    }
    async ask() {
        return this.inquirer.prompt(this.promptList);
    }
}
exports.Question = Question;
//# sourceMappingURL=question.js.map