import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/books-reducer';

const store = configureStore({
    reducer: {
        books: booksReducer,
    }
});

export default store;


