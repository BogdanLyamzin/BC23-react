import * as api from "../../shared/api/books";

import actions from "./books-actions";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });
    return Boolean(result);
}

export const fetchBooks = ()=> {
    const func = async (dispatch) => {
        try {
            dispatch(actions.fetchBooksLoading());
            const data = await api.getBooks();
            dispatch(actions.fetchBooksSuccess(data));
        } catch (error) {
            const {message, response} = error;
            const errorData = {
                message,
                status: response.status
            }
            dispatch(actions.fetchBooksError(errorData))
        }
        // api.getBooks()
        //     .then(data => {
        //         dispatch(fetchBooksSuccess(data))
        //     })
        //     .catch(error => {
        //         dispatch(fetchBooksError(error.message))
        //     })
    };

    return func;
}

export const addBook = (data) => {
    const func = async(dispatch, getState) => {
        const {books} = getState();
        if(isDublicate(data, books.items)) {
            return alert(`${data.title} - ${data.author} is alredy exist`)
        }
        
        try {
            dispatch(actions.addBookLoading());
            const result = await api.addBook(data);
            dispatch(actions.addBookSucess(result));
        } catch (error) {
            dispatch(actions.addBookError(error.message));
        }
    };

    return func;
}

export const removeBook = (id) => {
    const func = async(dispatch) => {
        try {
            dispatch(actions.removeBookLoading());
            await api.removeBook(id);
            dispatch(actions.removeBookSuccess(id));
        }
        catch(error) {
            dispatch(actions.removeBookError(error.message))
        }
    };

    return func;
}