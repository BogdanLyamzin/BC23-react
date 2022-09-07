import { addProduct, removeProduct } from "./types";

export const addProductAction = (product) => {
  return { type: addProduct, payload: product };
};

export const removeProductAction = (productId) => {
  return { type: removeProduct, payload: productId };
};
