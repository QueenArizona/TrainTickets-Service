import { FILTER_VALUE_CHANGE } from "./types";

export function filterValueChange(name, value) {
  return { type: FILTER_VALUE_CHANGE, payload: { name, value } };
}
