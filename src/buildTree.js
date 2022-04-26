import _ from 'lodash';

const getRemoved = (key, removedValue) => ({ type: 'removed', key, value: removedValue });
const getAdded = (key, addedValue) => ({ type: 'added', key, value: addedValue });
const getChanged = (key, remValue, addValue) => ({
  type: 'changed', key, value1: remValue, value2: addValue,
});
const getUnchanged = (key, val) => ({ type: 'unchanged', key, value: val });

export default function buildTree(file1, file2) {
  const keys = Object.keys({ ...file1, ...file2 }).sort();

  const getDiff = (key) => {
    if (_.isPlainObject(file1[key]) && _.isPlainObject(file2[key])) {
      return { type: 'nested', key, children: buildTree(file1[key], file2[key]) };
    }

    if (!_.has(file2, key)) {
      return getRemoved(key, file1[key]);
    }

    if (!_.has(file1, key)) {
      return getAdded(key, file2[key]);
    }

    if (file1[key] !== file2[key]) {
      return getChanged(key, file1[key], file2[key]);
    }

    return getUnchanged(key, file1[key]);
  };

  return keys.map(getDiff);
}
