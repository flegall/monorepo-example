// @flow
import _ from 'lodash';

export function return5(): number {
  return _.last([1, 2, 3, 4, 5]);
}

export function return6(): number {
  return 6;
}
