import * as api from "../../shared/api/books";

import { createOperation } from "../../shared/helpers/redux";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });
    return Boolean(result);
}

export const fetchBooks  = createOperation("books/fetch", api.getBooks);

export const addBook = createOperation("books/add", api.addBook, (data, {getState}) => {
    const {books} = getState();
    if(isDublicate(data, books.items)) {
        alert(`${data.title} - ${data.author} is alredy exist`);
        return false;
    }
});

export const removeBook  = createOperation("books/fetch", api.removeBook);