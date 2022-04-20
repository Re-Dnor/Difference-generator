import path from 'path';
import dataProcessing from './data.js';
import yaml from 'js-yaml';

const parse = (filepath) => {
  const extension = path.extname(filepath);

  if (extension === '.json') {
    return JSON.parse(dataProcessing(filepath))
  }
  if (extension === '.yml' || extension === '.yaml') {
    return yaml.load(dataProcessing(filepath));
  }

  return 'Error';

};
export default parse;