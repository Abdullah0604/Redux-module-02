import { PDECREMENT, PINCREMENT } from "./actionsType";

// initial state
const initialState = {
  value: 50,
};

export default function practiceCounterReducer(state = initialState, action) {
  switch (action.type) {
    case PINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case PDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
}
