import * as actions from "../actions/actionTypes.js"

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.CHANGE_COUNT:
      return {...state, count: action.payload};
    default:
      return state;
  }
}

export default countReducer;
