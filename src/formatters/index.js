import stylish from './stylish.js';
import plain from './plain.js';

export default function outputFormat(tree, format) {
  if (format === 'stylish') {
    return stylish(tree);
  }
  if (format === 'plain') {
    return plain(tree);
  }
}
