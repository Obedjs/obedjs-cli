#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_1 = require("./commands/create");
const program = new commander_1.Command();
program
    .name('obedjs')
    .description('CLI for the ObedJS framework')
    .version('1.0.0');
program
    .command('create <project-name>')
    .description('Create a new project')
    .action((projectName) => {
    (0, create_1.createCommand)(projectName);
});
program.parse(process.argv);
