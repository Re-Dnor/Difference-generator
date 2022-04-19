import genDiff from '../src/index.js';

test('Shows a difference two configuration files', () => {
  const filepath1 = './__fixtures__/file1.json';
  const filepath2 = './__fixtures__/file2.json';
  const difference = genDiff(filepath1, filepath2);
  const result =
    `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

  expect(difference).toEqual(result);
});