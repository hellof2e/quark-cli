"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const path_1 = __importDefault(require("path"));
class Printer {
    static power(start) {
        const defaultTargetDir = 'my-component';
        const cwd = process.cwd();
        const root = path_1.default.join(cwd, defaultTargetDir);
        console.log(root, cwd, start, 111);
    }
}
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map