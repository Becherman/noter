import { size } from 'lodash';
import {WithId} from './util-types';

/**
 * Getters
 */
export function makeGetterBy<T extends object, K = string>(propName: K) {
  return (obj: any) => {
    return obj[propName];
  };
}

// By properties
export const getId = makeGetterBy('id');


/**
 * Comparators
 */
export const compareById =
  <T extends WithId>(comparedId: string) =>
  (item: T) =>
    getId(item) === comparedId;


/**
 * Common
 */
export const insertAt = <T>(coll: T[], item: T, position: number) => {
  return [
    ...coll.slice(0, position),
    item,
    ...coll.slice(position, coll.length - 1),
  ];
};

export const hasOneElement = (list: Array<any>) => size(list) === 1;
