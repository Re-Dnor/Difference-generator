import * as fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import resultJson from '../__fixtures__/expected_json_result.js';
import resultPlain from '../__fixtures__/expected_plain_result.js';
import resultStylish from '../__fixtures__/expected_stylish_result.js';


const getFixturePath = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return path.join(__dirname, '..', '__fixtures__', filename);
};

const fileExtensions = ['json', 'yaml'];

const formatTypes = ['stylish', 'json', 'plain'];

describe.each(formatTypes)('compare', (format) => {
  test.each(fileExtensions)(`${format} %p`, (extension) => {
    const file1 = getFixturePath(`file1.${extension}`);
    const file2 = getFixturePath(`file2.${extension}`);
    let expectedResult;
    if (format === 'stylish') {
      expectedResult = resultStylish;
    } else if (format === 'json') {
      expectedResult = resultJson;
    } else if (format === 'plain') {
      expectedResult = resultPlain;
    }


    const compare = genDiff(file1, file2, format);
    expect(compare).toBe(expectedResult);
  });
});