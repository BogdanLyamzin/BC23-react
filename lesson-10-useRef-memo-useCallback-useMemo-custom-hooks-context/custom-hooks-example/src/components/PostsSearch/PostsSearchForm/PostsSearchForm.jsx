import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid';

import TextField from "../../../shared/components/TextField/TextField";
import SubmitButton from './../../../shared/components/SubmitButton/SubmitButton';

import useForm from "../../../shared/hooks/useForm";

import initialState from "./initialState";
import fields from "./fields";

import styles from "./posts-search-form.module.scss";

const PostsSearchForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const searchId = useMemo(()=> nanoid(), []);

    const {search} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField id={searchId} value={search} handleChange={handleChange} {...fields.search} />
            <SubmitButton text="Search" />
        </form>
    )
}

export default PostsSearchForm;

PostsSearchForm.defaultProps = {
    onSubmit: () => {}
}

PostsSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}