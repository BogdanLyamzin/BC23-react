import { createReducer } from "@reduxjs/toolkit";
import { addBook, removeBook } from "./books-actions";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });
    return Boolean(result);
}

const booksReducer = createReducer([], {
    [addBook.type]: (store, {payload}) => {
        if(isDublicate(payload, store)) {
            alert(`${payload.title}-${payload.author} is already exist`);
            return;
        }
        store.push(payload);
    },
    [removeBook]: (store, {payload}) => store.filter(({id}) => id !== payload),
})

/*
import { ADD_BOOK, REMOVE_BOOK } from "./books-types";
import booksReducer from './books-reducer';

const initialStore = [];

const booksReducer = (store = initialStore, {type, payload})=> {
    switch(type) {
        case ADD_BOOK:
            return [...store, payload];
        case REMOVE_BOOK:
            return store.filter(item => item.id !== payload);
        default: 
            return store;
    }
};
*/

export default booksReducer;