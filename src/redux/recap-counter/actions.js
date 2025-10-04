import { RDECREMENT, RINCREMENT } from "./actionTypes";

export const rincrement = (value) => {
  return {
    type: RINCREMENT,
    payload: value,
  };
};
export const rdecrement = (value) => {
  return {
    type: RDECREMENT,
    payload: value,
  };
};
