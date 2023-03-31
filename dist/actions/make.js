"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeAction = void 0;
const action_abstract_1 = require("./action.abstract");
const lib_1 = require("../lib");
const pluralize_1 = __importDefault(require("pluralize"));
const chalk_1 = __importDefault(require("chalk"));
class MakeAction extends action_abstract_1.ActionAbstract {
    getFilename(name, isTypescript) {
        if (isTypescript)
            return `${name}.ts`;
        return `${name}.js`;
    }
    resolve(name, destination) {
        var _a, _b;
        const renderer = new lib_1.Render();
        const isTypescript = !!((_a = require(`${process.cwd()}/package.json`).devDependencies) === null || _a === void 0 ? void 0 : _a.typescript);
        renderer.source(this._source);
        renderer.destination((_b = destination.path) !== null && _b !== void 0 ? _b : pluralize_1.default.plural(this._source));
        if (isTypescript) {
            renderer.language('ts');
        }
        else {
            renderer.language('js');
        }
        renderer.assign({
            name,
        });
        const distname = this.getFilename(name, isTypescript);
        switch (this._source) {
            case 'controller':
                if (destination.rest) {
                    renderer.make('rest.njk', distname);
                }
                else {
                    renderer.make('controller.njk', distname);
                }
                break;
            case 'service':
                renderer.make('service.njk', distname);
                break;
            case 'validator':
                renderer.make('validator.njk', distname);
                break;
            case 'middleware':
                renderer.make('middleware.njk', distname);
                break;
            default:
                console.log(chalk_1.default.red(`Unsupport file template`));
                process.exit(1);
        }
    }
}
exports.MakeAction = MakeAction;
//# sourceMappingURL=make.js.map