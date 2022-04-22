import _ from 'lodash';

const indent = (depth) => '   '.repeat(depth);

const stringify = (value, depth) => {
  if (_.isPlainObject(value)) {
    const data = Object.entries(value);
    const result = data.map(([key, val]) => `${indent(depth + 1)}  ${key}: ${stringify(val, depth + 1)}`);

    return ['{', ...result, `${indent(depth)}}`].join('\n');
  }

  return value;
};

export default function stylish(tree) {
  const iter = (currentTree, depth = 1) => {
    const result = (node) => {
      const { key, type } = node;

      if (type === 'nested') {
        const { children } = node;
        return `${indent(depth)}  ${key}: ${iter(children, depth + 1)}`;
      }
      if (type === 'removed') {
        return `${indent(depth)}- ${key}: ${stringify(node.value, depth)}`;
      }
      if (type === 'added') {
        return `${indent(depth)}+ ${key}: ${stringify(node.value, depth)}`;
      }
      if (type === 'changed') {
        return [
          `${indent(depth)}- ${key}: ${stringify(node.value1, depth)}`,
          `${indent(depth)}+ ${key}: ${stringify(node.value2, depth)}`,
        ].join('\n');
      }
      if (type === 'unchanged') {
        return `${indent(depth)}  ${key}: ${stringify(node.value, depth)}`;
      }
    };

    const strings = currentTree.map(result);
    return ['{', ...strings, `${indent(depth)}}`].join('\n');
  };

  return iter(tree, 1);
}
