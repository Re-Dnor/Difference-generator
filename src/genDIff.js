import parse from './parsers.js'
import buildTree from './buildTree.js'
import outputFormat from './formatters/index.js'


export default function genDiff(filepath1, filepath2, format) {
  //data processing
  const file1 = parse(filepath1);
  const file2 = parse(filepath2);

  if (file1 === 'Error' || file2 === 'Error') {
    return 'Error: data format is not supported! Please use json, yml or yaml format.';
  }

  //data comparison
  const diffTree = buildTree(file1, file2);
  const result = outputFormat(diffTree, format);
  return result;
}