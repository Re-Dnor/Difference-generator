import genDiff from '../src/index.js';

test('Shows a difference two configuration files', () => {
  const filepath1 = './__fixtures__/file1.json';
  const filepath2 = './__fixtures__/file2.json';
  const filepath3 = './__fixtures__/file3.yml';
  const filepath4 = './__fixtures__/file4.yml';
  const brokenFile1 = './__fixtures__/file.xsl';
  const brokenFile2 = './__fixtures__/file.txt';

  const result = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

  const resultError = 'Error: data format is not supported! Please use json, yml or yaml format.';

  expect(genDiff(filepath1, filepath2)).toEqual(result);
  expect(genDiff(filepath3, filepath4)).toEqual(result);
  expect(genDiff(brokenFile1, brokenFile2)).toEqual(resultError);
  expect(genDiff(filepath1, brokenFile1)).toEqual(resultError);
  expect(genDiff(brokenFile2, filepath2)).toEqual(resultError);
});
