"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const path = __importStar(require("path"));
class Runner {
    constructor(binary) {
        this._directory = '';
        this.binary = binary;
    }
    directory(directory) {
        this._directory = directory;
        return this;
    }
    async run(...args) {
        return new Promise((resolve, reject) => {
            const options = {
                cwd: path.join(process.cwd(), this._directory),
                stdio: 'inherit',
                shell: true,
            };
            const child = child_process_1.spawn(`${this.binary}`, args, options);
            child.on('close', code => {
                if (code === 0) {
                    resolve(null);
                }
                else {
                    console.error(chalk_1.default.red(`\nFailed to execute command: ${this.binary} ${args.join(' ')}`));
                    reject();
                }
            });
        });
    }
}
exports.Runner = Runner;
//# sourceMappingURL=runner.js.map