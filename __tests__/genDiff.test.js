import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../src/index.js';
import expectedResultStylish from '../__fixtures__/expected_stylish_result.js';
import expectedResultPlain from '../__fixtures__/expected_plain_result.js';
import expectedResultJSON from '../__fixtures__/expected_json_result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yaml = getFixturePath('file1.yaml');
const file2Yml = getFixturePath('file2.yml');
const FileBroken = getFixturePath('file2.txt');
const Error = 'Error: data format is not supported! Please use json, yml or yaml format.';

test('Stylish format, function gendiff', () => {
  expect(gendiff(file1Json, file2Json)).toBe(expectedResultStylish);
  expect(gendiff(file1Yaml, file2Yml)).toBe(expectedResultStylish);
});

test('Plain format, function gendiff', () => {
  expect(gendiff(file1Json, file2Json, 'plain')).toBe(expectedResultPlain);
  expect(gendiff(file1Yaml, file2Yml, 'plain')).toBe(expectedResultPlain);
});

test('JSON format, function gendiff', () => {
  expect(gendiff(file1Json, file2Json, 'json')).toBe(expectedResultJSON);
  expect(gendiff(file1Yaml, file2Yml, 'json')).toBe(expectedResultJSON);
});

test('Broken format, function gendiff', () => {
  expect(gendiff(file1Json, FileBroken)).toBe(Error);
});
