import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

export default function plain(tree) {
  const iter = (node, ancestry = '') => {
    const { key, type } = node;
    const newAncestry = ancestry === '' ? key : `${ancestry}.${key}`;

    if (type === 'nested') {
      const { children } = node;
      return children.flatMap((child) => iter(child, newAncestry));
    }
    if (type === 'deleted') {
      return `Property '${newAncestry}' was removed`;
    }
    if (type === 'added') {
      const { value: addedValue } = node;
      return `Property '${newAncestry}' was added with value: ${stringify(
        addedValue,
      )}`;
    }
    if (type === 'changed') {
      const { value1: firstObjValue, value2: secondObjValue } = node;
      return `Property '${newAncestry}' was updated. From ${stringify(
        firstObjValue,
      )} to ${stringify(secondObjValue)}`;
    }
    if (type === 'unchanged') {
      return [];
    }
  };

  const lines = tree.flatMap((child) => iter(child)).join('\n');
  return lines;
}
