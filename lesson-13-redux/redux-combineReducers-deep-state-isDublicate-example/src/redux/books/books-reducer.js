import { combineReducers } from "redux";

import itemsReducer from "./items/items-reducer";
import filterReducer from "./filter/filter-reducer";

const booksReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer,
});

export default booksReducer;