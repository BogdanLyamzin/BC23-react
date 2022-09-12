import { configureStore } from '@reduxjs/toolkit';

import booksApi from './books/books-api';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
    reducer: {
        [booksApi.reducerPath]: booksApi.reducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(booksApi.middleware)
})

export default store;


