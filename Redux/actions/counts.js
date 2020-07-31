import * as actions from "./actionTypes";

export function changeCount(count) {
  return {type: actions.CHANGE_COUNT, payload: count};
}
