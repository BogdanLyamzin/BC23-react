import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

import useLocalStorage from "../../shared/hooks/useLocalStorage";

import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";

import styles from "./books.module.css";

import { getFilteredBooks } from "./getFilteredBooks";

const Books = () => {
    const [books, setBooks] = useLocalStorage({key: "books", initialState: []})

    const [filter, setFilter] = useState("");

    const isDublicate = ({title, author}) => {
        const result = books.find(item => item.title === title && item.author === author);
        return Boolean(result);
    }

    const addBook = (data) => {
        if(isDublicate(data)) {
            return alert(`${data.title} - ${data.author} is already in list`);
        }

        setBooks(prevBooks => {
            const newBook = {
                ...data,
                id: nanoid()
            };

            return [...prevBooks, newBook];
        })
    };

    const removeBook = useCallback((id) => {
        setBooks(prevBooks => prevBooks.filter(item => item.id !== id));
    }, [setBooks]);

    const handleFilter = useCallback(({target}) => {
        setFilter(target.value);
    }, [setFilter]);

    const filteredBooks = getFilteredBooks(filter, books);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Мои книги</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <FormAddBook onSubmit={addBook} />
                </div>
                <div className={styles.column}>
                    <input name="filter" onChange={handleFilter} className={styles.filter} placeholder="Filter" />
                    <BookList items={filteredBooks} removeBook={removeBook} />
                </div>
            </div>
        </div>
    )
}
/*
class Books extends Component {

    state = {
        books: [],
        filter: "",
    }

    addBook = (data) => {
        if(this.isDublicate(data)) {
            return alert(`${data.title} - ${data.author} is already in list`)
        }
        this.setState(prevState => {
            const newBook = {
                id: nanoid(),
                ...data,
            };
            
            return {
                books: [...prevState.books, newBook]
            }
        })
    }

    removeBook = (id) => {
        this.setState(({books}) => {
            const newBooks = books.filter(item => item.id !== id);

            return {
                books: newBooks,
            }
        })
    }

    handleFilter = ({target}) => {
        const {name, value} = target;
        this.setState({
            [name]: value,
        })
    }

    isDublicate({title, author}) {
        const {books} = this.state;
        const result = books.find(item => item.title === title && item.author === author);
        return result;
    }

    getFilteredBooks() {
        const {books, filter} = this.state;

        if(!filter) {
            return books;
        }

        const normalizedFilter = filter.toLowerCase();
        
        const filteredBooks = books.filter(({title, author}) => {
            const normalizedTitle = title.toLowerCase();
            const normalizedAuthor = author.toLowerCase();
            const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
            return result;
        });

        return filteredBooks;
    }

    render() {
        const {addBook, removeBook,handleFilter} = this;

        const books = this.getFilteredBooks();

        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Мои книги</h2>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <FormAddBook onSubmit={addBook} />
                    </div>
                    <div className={styles.column}>
                        <input name="filter" onChange={handleFilter} className={styles.filter} placeholder="Filter" />
                        <BookList items={books} removeBook={removeBook} />
                    </div>
                </div>
            </div>
        )
    }
}
*/
export default Books;