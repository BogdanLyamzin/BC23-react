import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';

import TextField from "../../../shared/components/TextField/TextField";
import SubmitButton from './../../../shared/components/SubmitButton/SubmitButton';

import initialState from "./initialState";
import fields from "./fields";

import styles from "./posts-search-form.module.scss";

const PostsSearchForm = ({onSubmit}) => {
    const [state, setState] = useState({...initialState});

    const searchRef = useRef();
    const searchId = useRef(nanoid());

    useEffect(()=> {
        searchRef.current.focus()
    }, [])

    const handleChange = ({target}) => {
        const {value, name} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState})
    }

    const {search} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <input value={search} ref={searchRef} {...fields.search} onChange={handleChange} />
            </div>
            {/* <TextField value={search} handleChange={handleChange} {...fields.search} /> */}
            <SubmitButton text="Search" />
        </form>
    )
}
/*
class PostsSearchForm extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {...initialState}

    searchId = nanoid()

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
        this.reset();
    }

    reset() {
        this.setState({...initialState})
    }

    render() {
        const {handleChange, handleSubmit, searchId} = this;
        const {search} = this.state;

        return (
            <form onSubmit={handleSubmit} className={styles.form}>
                <TextField value={search} id={searchId} handleChange={handleChange} {...fields.search} />
                <SubmitButton text="Search" />
            </form>
        )
    }
}
*/
export default PostsSearchForm;