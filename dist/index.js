#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const create_1 = require("./commands/create");
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description('ObedJS CLI tool');
program
    .command('create <project-name>')
    .description('Create a new project')
    .action((projectName) => {
    (0, create_1.createProject)(projectName);
});
program.parse(process.argv);
