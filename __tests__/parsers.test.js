import parse from '../src/parsers.js';
import dataProcessing from '../src/data.js';
import yaml from 'js-yaml';

test('Show format file', () => {
  const filepath1 = './__fixtures__/file1.json';
  const filepath2 = './__fixtures__/file2.json';
  const filepath3 = './__fixtures__/file3.yml';
  const filepath4 = './__fixtures__/file4.yml';
  const brokenFile1 = './__fixtures__/file.xsl';
  const brokenFile2 = './__fixtures__/file.txt';

  expect(parse(filepath1)).toEqual(JSON.parse(dataProcessing(filepath1)));
  expect(parse(filepath2)).toEqual(JSON.parse(dataProcessing(filepath2)));
  expect(parse(filepath3)).toEqual(yaml.load(dataProcessing(filepath3)));
  expect(parse(filepath4)).toEqual(yaml.load(dataProcessing(filepath4)));
  expect(parse(brokenFile1)).toEqual('Error');
  expect(parse(brokenFile2)).toEqual('Error');
});