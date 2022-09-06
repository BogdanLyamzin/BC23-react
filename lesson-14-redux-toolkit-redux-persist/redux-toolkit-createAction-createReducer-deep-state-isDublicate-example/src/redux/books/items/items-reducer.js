import { createReducer } from "@reduxjs/toolkit";
import { addBook, removeBook } from "./items-actions";

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
            alert(`${payload.title} - ${payload.author} is already exist`);
            return;
        }
        store.push(payload);
    },
    [removeBook]: (store, {payload}) => store.filter(({id}) => id !== payload),
})

export default booksReducer;