#!/usr/bin/env node
import { Command } from 'commander';
import genDIff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .version('0.0.2')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log(genDIff(filepath1, filepath2, options.format));
  });

program.parse();
