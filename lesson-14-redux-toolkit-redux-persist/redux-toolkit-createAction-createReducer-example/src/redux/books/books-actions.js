import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction("books/add", (data)=> {
    return {
        payload: {
            ...data,
            id: nanoid(),
        }
    }
});
export const removeBook = createAction("books/remove");

/*
import { ADD_BOOK, REMOVE_BOOK } from "./books-types"

export const addBook = payload => {
    return {
        type: ADD_BOOK,
        payload: {
            ...payload,
            id: nanoid(),
        },
    }
};

export const removeBook = payload => {
    return {
        type: REMOVE_BOOK,
        payload,
    }
};
*/