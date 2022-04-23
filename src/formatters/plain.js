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
  const iter = (node, higthway = '') => {
    const { key, type } = node;
    const newHigthway = higthway === '' ? key : `${higthway}.${key}`;

    if (type === 'nested') {
      const { children } = node;
      return children.flatMap((child) => iter(child, newHigthway));
    }
    if (type === 'removed') {
      return `Property '${newHigthway}' was removed`;
    }
    if (type === 'added') {
      const { value: addedValue } = node;
      return `Property '${newHigthway}' was added with value: ${stringify(addedValue)}`;
    }
    if (type === 'changed') {
      const { value1: firstObjValue, value2: secondObjValue } = node;
      return `Property '${newHigthway}' was updated. From ${stringify(firstObjValue)} to ${stringify(secondObjValue)}`;
    }

    return [];
  };

  const lines = tree.flatMap((child) => iter(child)).join('\n');
  return lines;
}
