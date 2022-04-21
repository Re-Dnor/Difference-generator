import stylish from './stylish.js';

export default function outputFormat(tree, format) {
  if (format === 'stylish') {
    return stylish(tree);
  }
}