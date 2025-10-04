// action creator

import { PDECREMENT, PINCREMENT } from "./actionsType";

export const pincrement = (value) => {
  return {
    type: PINCREMENT,
    payload: value,
  };
};

export const pdecrement = (value) => {
  return {
    type: PDECREMENT,
    payload: value,
  };
};
