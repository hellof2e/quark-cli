#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const commands_1 = require("../commands");
const actions_1 = require("../actions");
commander_1.default
    .version(require('../../package.json').version, '-v, --version');
new commands_1.CreateCommand(commander_1.default)
    .resolve(new actions_1.CreateAction());
new commands_1.MakeCommand(commander_1.default)
    .resolve(new actions_1.MakeAction());
commander_1.default.parse(process.argv);
//# sourceMappingURL=index.js.map