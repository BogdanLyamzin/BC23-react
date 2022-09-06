import { combineReducers } from "@reduxjs/toolkit";

import items from "./items/items-reducer";
import filter from "./filter/filter-reducer";

const booksReducer = combineReducers({
    items,
    filter,
});

export default booksReducer;