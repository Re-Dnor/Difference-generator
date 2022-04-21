import fs from 'fs';
import path from 'path';
import process from 'process';
import yaml from 'js-yaml';

const readFile = (filepath) => fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8')

const parse = (filepath) => {
  const extension = path.extname(filepath);

  if (extension === '.json') {
    return JSON.parse(readFile(filepath));
  }
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(readFile(filepath));
  }
  return 'Error';
};
export default parse;
