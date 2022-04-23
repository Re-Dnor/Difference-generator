import stylish from './stylish.js';
import plain from './plain.js';

export default function outputFormat(tree, format) {
  if (format === 'plain') {
    return plain(tree);
  }
  if (format === 'json') {
    return JSON.stringify(tree);
  }

  return stylish(tree);
}
