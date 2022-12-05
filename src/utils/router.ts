import { first } from "lodash";
import { hasOneElement, getId } from "./common";

export const isOnlyRootMatched = (matches: {id: string}[]): boolean => {
  return hasOneElement(matches) && getId(first(matches)) === '0';
};
