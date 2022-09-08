import { createAction } from "@reduxjs/toolkit";

const fetchBooksLoading = createAction("books/fetch/loading");
const fetchBooksSuccess = createAction("books/fetch/success");
const fetchBooksError = createAction("books/fetch/error");

const addBookLoading = createAction("books/add/loading");
const addBookSucсess = createAction("books/add/success");
const addBookError = createAction("books/add/error");

const removeBookLoading = createAction("books/remove/loading");
const removeBookSuccess = createAction("books/remove/success");
const removeBookError = createAction("books/remove/error");

const actions = {
    fetchBooksLoading,
    fetchBooksSuccess,
    fetchBooksError,
    addBookLoading,
    addBookSucсess,
    addBookError,
    removeBookLoading,
    removeBookSuccess,
    removeBookError,
};

export default actions;
