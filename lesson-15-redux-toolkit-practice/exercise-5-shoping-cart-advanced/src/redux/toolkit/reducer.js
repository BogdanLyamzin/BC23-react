import { createReducer } from "@reduxjs/toolkit";
import { addProductAction, removeProductAction } from "./actions"

const cartReducer = createReducer([], {
    [addProductAction]: (state, action) => {
        return [...state, action.payload]
    },
    [removeProductAction]: (state, action) => state.filter(element =>
        element.id !== action.payload),
})

export { cartReducer }