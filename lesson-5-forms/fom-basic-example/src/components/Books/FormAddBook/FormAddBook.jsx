import { Component } from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";

import styles from "./form-add-book.module.css";

class FormAddBook extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {
        title: "",
        author: "",
    }

    titleId = nanoid();
    authorId = nanoid();

    handleChange = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        // addBook({...this.state});
        this.reset();
    }

    reset() {
        this.setState({
            title: "",
            author: ""
        })
    }

    render() {
        const {handleSubmit, handleChange, titleId, authorId} = this;
        const {title, author} = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor={titleId}>Название</label>
                    <input id={titleId} value={title} name="title" onChange={handleChange} type="text" className={styles.field} placeholder="Введите название" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={authorId}>Автор</label>
                    <input id={authorId} value={author} name="author" onChange={handleChange} type="text" className={styles.field} placeholder="Введите автора" required />
                </div>
                <button className={styles.btn}>Добавить книгу</button>
            </form>
        )
    }
}

export default FormAddBook;

/*
FormAddBook.defaultProps = {
    onSubmit: () => {}
}

FormAddBook.propTypes = {
    onSubmit: PropTypes.func,
}
*/