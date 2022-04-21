import parse from '../src/parsers.js';
import genDiff from '../src/genDIff.js'
import resultFlat from '../__fixtures__/resultFlat.js'
import resultDeep from '../__fixtures__/resultDeep.js'


test('Shows difference between files', () => {
  const filepath1 = './__fixtures__/file1.json';
  const filepath2 = './__fixtures__/file2.json';
  const filepath3 = './__fixtures__/file3.yml';
  const filepath4 = './__fixtures__/file4.yml';
  const filepath5 = './__fixtures__/file5.json';
  const filepath6 = './__fixtures__/file6.json';

  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(resultFlat);
  expect(genDiff(filepath5, filepath6, 'stylish')).toEqual(resultDeep);
});

test('Shows error', () => {
  const filepath1 = './__fixtures__/file1.json';
  const brokenFile = './__fixtures__/file1.txt';

  expect(genDiff(filepath1, brokenFile, 'stylish')).toEqual('Error: data format is not supported! Please use json, yml or yaml format.');
});
