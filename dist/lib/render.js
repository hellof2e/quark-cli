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
exports.Render = void 0;
const nunjucks_1 = __importDefault(require("nunjucks"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const glob_1 = __importDefault(require("glob"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const pluralize_1 = __importDefault(require("pluralize"));
const chalk_1 = __importDefault(require("chalk"));
class Render {
    constructor() {
        this._templatePath = path.resolve(__dirname, '../../template');
        this._assigns = {};
        this._env = nunjucks_1.default.configure(this._templatePath);
        this._env.addFilter('firstUpperCase', function (str) {
            return str.replace(/\b(\w)/g, $1 => $1.toUpperCase());
        });
        this._env.addFilter('plural', function (str) {
            return pluralize_1.default.plural(str);
        });
    }
    source(sourcePath) {
        this._sourcePath = sourcePath;
        return this;
    }
    destination(destinationPath) {
        this._destinationPath = destinationPath;
        return this;
    }
    developType(developType) {
        this._developType = developType;
        return this;
    }
    assign(name, value) {
        if (typeof name === 'string') {
            this._assigns[name] = value;
        }
        else {
            this._assigns = Object.assign(Object.assign({}, this._assigns), name);
        }
        return this;
    }
    apply() {
        const sourcePath = path.join(this._templatePath, this._sourcePath, this._developType);
        if (fs.existsSync(path.join(process.cwd(), 'package.json'))) {
            console.log(chalk_1.default.red(`project has exists!`));
            process.exit(1);
        }
        const files = glob_1.default.sync(path.join(sourcePath, '**'), {
            nodir: true,
            dot: true
        });
        for (const file of files) {
            const filename = path.join(process.cwd(), this._destinationPath, path.relative(sourcePath, file));
            const str = this._env.render(file);
            fs_extra_1.default.ensureFileSync(filename);
            console.log(filename, 12);
            fs.writeFileSync(filename, str, {
                encoding: 'utf-8'
            });
        }
    }
}
exports.Render = Render;
//# sourceMappingURL=render.js.map