"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Printer = void 0;
const figlet_1 = __importDefault(require("figlet"));
class Printer {
    static power() {
        figlet_1.default('Hello Quark', (err, data) => {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
            console.log('Done! Enjoy it!');
        });
    }
}
exports.Printer = Printer;
//# sourceMappingURL=printer.js.map