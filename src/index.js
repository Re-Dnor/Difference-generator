import _ from 'lodash';
import dataFile from './data.js';

export default function genDiff(filepath1, filepath2) {
  const file1 = dataFile(filepath1);
  const file2 = dataFile(filepath2);

  const keys = Object.keys({ ...file1, ...file2 }).sort();
  const getDeviations = keys.map((key) => {
    if (!_.has(file2, key)) {
      return `- ${key}: ${file1[key]}`;
    } if (!_.has(file1, key)) {
      return `+ ${key}: ${file2[key]}`;
    } if (file1[key] === file2[key]) {
      return `  ${key}: ${file1[key]}`;
    }
    return `- ${key}: ${file1[key]}\n+ ${key}: ${file2[key]}`;
  });

  return ['{', ...getDeviations, '}'].join('\n');
}
