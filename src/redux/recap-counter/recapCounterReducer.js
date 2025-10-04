// initial state

import { RDECREMENT, RINCREMENT } from "./actionTypes";

const initialState = {
  value: 20,
};

export default function recapCounterReducer(state = initialState, action) {
  switch (action.type) {
    case RINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case RDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
}
