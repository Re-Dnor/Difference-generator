import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const readFixtureFile = (filepath) => {
  const fixturePath = getFixturePath(filepath);
  const data = fs.readFileSync(fixturePath, 'utf-8');
  return data;
};

const formats = ['stylish', 'plain', 'json'];
const extensions = ['json', 'yaml', 'yml'];
const fictitiousExt = ['xls', 'doc', 'pdf'];

describe.each(formats)('compare', (format) => {
  test.each(extensions)(`format: ${format}`, (extension) => {
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    const result = readFixtureFile(`result_${format}.txt`);
    const difference = gendiff(file1, file2, format);
    expect(difference).toBe(result);
  });

  test.each(fictitiousExt)(`format: ${format}`, (ficExt) => {
    const file1 = getFixturePath(`file1.${ficExt}`);
    const file2 = getFixturePath(`file2.${ficExt}`);
    const difference = gendiff(file1, file2, format);
    expect(difference).toEqual('Error: data format is not supported! Please use json, yml or yaml format.');
  });
});
