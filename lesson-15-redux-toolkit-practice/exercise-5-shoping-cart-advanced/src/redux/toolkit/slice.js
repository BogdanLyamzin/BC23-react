import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // addProduct: (state, { payload }) => [...state, payload],
    addProduct: {
      reducer: (state, { payload }) => {
        const item = state.find((el) => el.id === payload.id);
        if (item) {
          item.quantity += 1;
        } else state.push(payload);
        // return [...state, payload];
      },
      prepare: (data) => {
        return { payload: { ...data, quantity: 1 } };
      },
    },

    removeProduct: (state, { payload }) =>
      state.filter((element) => element.id !== payload),

    incrementProduct: (state, { payload }) => {
      const item = state.find((el) => el.id === payload);
      item.quantity += 1;
    },

    decrementProduct: (state, { payload }) => {
      const item = state.find((el) => el.id === payload);
      item.quantity -= 1;
      if (!item.quantity) {
        const itemIndex = state.findIndex((el) => el.id === payload);
        state = state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct, incrementProduct, decrementProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
