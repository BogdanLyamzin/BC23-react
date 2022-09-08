import { createReducer } from "@reduxjs/toolkit";

import actions from "./books-actions";

const intitialStore = {
    items: [],
    loading: false,
    error: null,
}

const booksReducer = createReducer(intitialStore, {
    [actions.fetchBooksLoading]: (store) =>{
        store.loading = true;
        store.error = null;
    },
    [actions.fetchBooksSuccess]: (store, {payload}) => {
        store.items = payload;
        store.loading = false;
    },
    [actions.fetchBooksError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
    [actions.addBookLoading]: (store) =>{
        store.loading = true;
        store.error = null;
    },
    [actions.addBookSucess]: (store, {payload}) => {
        store.loading = false;
        store.items.push(payload);
    },
    [actions.addBookError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
    [actions.removeBookLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.removeBookSuccess]: (store, {payload}) => {
        store.loading = false;
        store.items = store.items.filter(item => item.id !== payload)
    },
    [actions.removeBookError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    }
})

export default booksReducer;