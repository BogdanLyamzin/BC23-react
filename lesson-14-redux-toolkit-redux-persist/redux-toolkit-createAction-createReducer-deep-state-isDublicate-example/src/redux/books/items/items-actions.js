import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addBook = createAction("books/items/add", (data)=> {
    return {
        payload: {
            ...data,
            id: nanoid(),
        }
    }
});
export const removeBook = createAction("books/items/remove");
