import { nanoid } from "nanoid";

import { ADD_BOOK, REMOVE_BOOK } from "./items-types"

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
