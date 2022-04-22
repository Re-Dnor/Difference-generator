import genDiff from '../src/index.js';
import resultFlat from '../__fixtures__/resultFlat.js';
import resultDeep from '../__fixtures__/resultDeep.js';
import resultDeepPlain from '../__fixtures__/resultDeepPlain.js';
import resultFlatPlain from '../__fixtures__/resultFlatPlain.js';
import resultJson from '../__fixtures__/resultJson.js';

const filepath1 = './__fixtures__/file1.json';
const filepath2 = './__fixtures__/file2.json';
const filepath3 = './__fixtures__/file3.yml';
const filepath4 = './__fixtures__/file4.yml';
const filepath5 = './__fixtures__/file5.json';
const filepath6 = './__fixtures__/file6.json';
const filepath7 = './__fixtures__/file7.yml';
const filepath8 = './__fixtures__/file8.yml';
const brokenFile = './__fixtures__/file1.txt';

test('Shows difference between files "--format stylish"', () => {
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(resultFlat);
  expect(genDiff(filepath3, filepath4, 'stylish')).toEqual(resultFlat);
  expect(genDiff(filepath5, filepath6, 'stylish')).toEqual(resultDeep);
  expect(genDiff(filepath7, filepath8, 'stylish')).toEqual(resultDeep);
});

test('Shows difference between files "--format plain"', () => {
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(resultFlatPlain);
  expect(genDiff(filepath3, filepath4, 'plain')).toEqual(resultFlatPlain);
  expect(genDiff(filepath5, filepath6, 'plain')).toEqual(resultDeepPlain);
  expect(genDiff(filepath7, filepath8, 'plain')).toEqual(resultDeepPlain);
});

test('Shows difference between files "--format json"', () => {
  expect(genDiff(filepath5, filepath6, 'json')).toEqual(resultJson);
  expect(genDiff(filepath7, filepath8, 'json')).toEqual(resultJson);
});

test('Shows error', () => {
  expect(genDiff(filepath1, brokenFile)).toEqual('Error: data format is not supported! Please use json, yml or yaml format.');
});
