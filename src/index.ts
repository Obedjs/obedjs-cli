#!/usr/bin/env ts-node

import { Command } from 'commander';
import { createProject } from './commands/create';

const program = new Command();

program
  .version('1.0.0')
  .description('ObedJS CLI tool');

program
  .command('create <project-name>')
  .description('Create a new project')
  .action((projectName: string) => {
    createProject(projectName);
  });

program.parse(process.argv);
