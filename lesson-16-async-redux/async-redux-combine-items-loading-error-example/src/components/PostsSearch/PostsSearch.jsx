import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostList from './../../shared/components/PostList/PostList';
import Modal from "../../shared/components/Modal/Modal";

import { searchPosts } from "../../shared/api/books";

import styles from "./posts-search.module.scss";
import { queryAllByPlaceholderText } from "@testing-library/react";

const modalInitialState = {
    title: "",
    body: ""
}

const PostsSearch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({...modalInitialState});

    const [searchParams, setSearchParams] = useSearchParams();

    const q = searchParams.get('q');

    useEffect(()=> {
        const fetchPosts = async () =>  {        
            try {
                setLoading(true);
                const data = await searchPosts(q, page);
                setItems(prevItems => [...prevItems, ...data])
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
          }
          if(q) {
            fetchPosts()
          }    
    }, [q, page]);

    const onSearch = ({q}) => {
        const params = Object.fromEntries([...searchParams]);
        setSearchParams({...params, q})
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
