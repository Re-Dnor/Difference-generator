import _ from 'lodash';
import dataFile from './data.js';

export default function genDiff(filepath1, filepath2) {
  const file1 = dataFile(filepath1);
  const file2 = dataFile(filepath2);

  const allKeys = Object.keys({ ...file1, ...file2 }).sort();
  const getDifferences = allKeys.map((key) => {
    if (!_.has(file2, key)) {                //not found key in file2
      return `- ${key}: ${file1[key]}`;
    }
    if (!_.has(file1, key)) {                //not found key in file1
      return `+ ${key}: ${file2[key]}`;
    }
    if (file1[key] === file2[key]) {         //same values
      return `  ${key}: ${file1[key]}`;
    }
    return `- ${key}: ${file1[key]}\n+ ${key}: ${file2[key]}`; //different values
  });

  const result = ['{', ...getDifferences, '}'].join('\n');
  return result;
}
