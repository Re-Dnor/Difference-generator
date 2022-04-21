import yaml from 'js-yaml';
import parse from '../src/parsers.js';
import fs from 'fs';
import path from 'path';
import process from 'process';


test('Parsing file', () => {
  const filepath1 = './__fixtures__/file1.json'; //плоский JSON файл
  const filepath3 = './__fixtures__/file3.yml'; //плоский yml файл
  const filepath5 = './__fixtures__/file5.json'; //JSON с вложенностью 
  const filepath7 = './__fixtures__/file7.yml'; //yml с вложенностью 
  const brokenFile1 = './__fixtures__/file.txt'; //не поддерживает формат


  expect(parse(filepath1)).toEqual(JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8')));
  expect(parse(filepath3)).toEqual(yaml.load(fs.readFileSync(path.resolve(process.cwd(), filepath3), 'utf-8')));
  expect(parse(filepath5)).toEqual(JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath5), 'utf-8')));
  expect(parse(filepath7)).toEqual(yaml.load(fs.readFileSync(path.resolve(process.cwd(), filepath7), 'utf-8')));
  expect(parse(brokenFile1)).toEqual('Error');
});
