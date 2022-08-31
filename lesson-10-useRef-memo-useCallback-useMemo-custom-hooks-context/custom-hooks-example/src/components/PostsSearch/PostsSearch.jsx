import { useState } from "react";

import useFetch from "../../shared/hooks/useFetch";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostList from './../../shared/components/PostList/PostList';
import Modal from "../../shared/components/Modal/Modal";

import { searchPosts } from "../../shared/api/posts";

import styles from "./posts-search.module.scss";

const modalInitialState = {
    title: "",
    body: ""
}

const PostsSearch = () => {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({...modalInitialState});

    const {items, loading, error, setItems} = useFetch({fetchData: searchPosts, dependencies: [search, page], isFetch: () => !search})

    const onSearch = ({search}) => {
        setSearch(search);
        setPage(1);
        setItems([])
    }

    const loadMore = () => setPage(prevPage => prevPage + 1);

    const openModal = (modalContent) => {
        setModalOpen(true);
        setModalContent({...modalContent});
    }

    const closeModal = ()=> {
        setModalOpen(false);
        setModalContent({...modalInitialState});
    }

    const isPosts = Boolean(items.length);

    return (
        <div>
            {modalOpen && (<Modal close={closeModal}>
                <h3 className={styles.postTitle}>{modalContent.title}</h3>
                <p className={styles.postContent}>{modalContent.body}</p>
            </Modal>)}
            <PostsSearchForm onSubmit={onSearch} />
            {isPosts && <PostList items={items} onClick={openModal} />}
            {loading && <p>....Loading posts</p>}
            {error && <p>Не удалось загрузить посты</p>}
            {isPosts && <button onClick={loadMore}>load more</button>}
        </div>
    )

}

export default PostsSearch;
