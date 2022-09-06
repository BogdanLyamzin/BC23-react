import { useSelector, useDispatch } from "react-redux";

import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";

import { addBook, removeBook } from "../../redux/books/books-slice";
import {setFilter} from "../../redux/filter/filter-slice";

import { getFilteredBooks } from "../../redux/books/books-selectors";
import {getFilter} from "../../redux/filter/filter-selectors";

import styles from "./books.module.css";

const Books = () => {
    const books = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const onAddBook = data => {
        const action = addBook(data);
        dispatch(action)
    };

    const onRemoveBook = id => {
        dispatch(removeBook(id));
    };

    const handleFilter = ({target}) => {
        dispatch(setFilter(target.value));
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Мои книги</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <FormAddBook onSubmit={onAddBook} />
                </div>
                <div className={styles.column}>
                    <input value={filter} name="filter" onChange={handleFilter} className={styles.filter} placeholder="Filter" />
                    <BookList items={books} removeBook={onRemoveBook} />
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