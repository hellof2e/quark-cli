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
    language() {
        this.promptList.push({
            type: 'list',
            name: 'lang',
            message: 'Which one to use for development?',
            choices: [
                {
                    name: 'typescript',
                    value: 'ts'
                },
                {
                    name: 'javascript',
                    value: 'js'
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
                    name: 'npm',
                    value: 'npm'
                },
                {
                    name: 'yarn',
                    value: 'yarn'
                },
                {
                    name: 'skip install',
                    value: ''
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