import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import recapCounterReducer from "./recap-counter/recapCounterReducer";
import practiceCounterReducer from "./practice-hooks-counter/practiceCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  recapCounter: recapCounterReducer,
  practiceCounter: practiceCounterReducer,
});

export default rootReducer;
