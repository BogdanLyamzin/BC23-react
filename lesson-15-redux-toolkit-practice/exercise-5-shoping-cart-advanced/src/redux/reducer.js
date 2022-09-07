import { addProduct, removeProduct } from "./types";

export function cartReducer(prevState = [], { type, payload }) {
  switch (type) {
    case addProduct:
      return [...prevState, payload];
    case removeProduct:
      return prevState.filter((el) => el.id !== payload);
    default:
      return prevState;
  }
}

export function filterCartReducer(prevstate = "", { type, payload }) {
  switch (type) {
    default:
      return prevstate;
  }
}
