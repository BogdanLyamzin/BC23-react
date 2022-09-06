import { combineReducers } from "redux";

import booksReducer from './books/books-reducer';

const rootReducer = combineReducers({
    books: booksReducer,
});

export default rootReducer;
