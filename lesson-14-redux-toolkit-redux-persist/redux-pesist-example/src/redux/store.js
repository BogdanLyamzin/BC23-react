import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import booksReducer from './books/books-reducer';

const booksPersistConfig = {
    key: "books",
    storage,
    whitelist: ["items"],
    // blacklist: ["filter"]
};

const persistedBooksReducer = persistReducer(booksPersistConfig, booksReducer);

export const store = configureStore({
    reducer: {
        books: persistedBooksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);




