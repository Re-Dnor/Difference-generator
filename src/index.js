import _ from 'lodash';
import parse from './parsers.js';

function genDiff(filepath1, filepath2) {
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);

  if (file1 === 'Error' || file2 === 'Error') {
    return 'Error: data format is not supported! Please use json, yml or yaml format.';
  }

  const allKeys = Object.keys({ ...file1, ...file2 });
  const sortedKeys = allKeys.sort();
  const getDifferences = sortedKeys.map((key) => {
    if (!_.has(file2, key)) { // not found key in file2
      return `- ${key}: ${file1[key]}`;
    }
    if (!_.has(file1, key)) { // not found key in file1
      return `+ ${key}: ${file2[key]}`;
    }
    if (file1[key] === file2[key]) { // same values
      return `  ${key}: ${file1[key]}`;
    }
    return `- ${key}: ${file1[key]}\n+ ${key}: ${file2[key]}`; // different values
  });

  const result = ['{', ...getDifferences, '}'].join('\n');
  return result;
}

export default genDiff;
