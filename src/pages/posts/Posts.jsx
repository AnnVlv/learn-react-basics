import React, {useEffect, useRef, useState} from 'react';
import PostList from './components/post-list/PostList';
import PostFilters from './components/post-filters/PostFilters';
import PostForm from './components/post-form/PostForm';
import Modal from '../../UI/modal/Modal';
import Button from '../../UI/button/Button';
import Loader from '../../UI/loader/Loader';
import Select from '../../UI/select/Select';
import PostService from '../../API/PostService';
import {usePosts} from '../../hooks/usePosts';
import {useFetching} from '../../hooks/useFetching';
import {useObserver} from '../../hooks/useObserver';
import {getPageCount} from '../../utils/getPageCount';
import classes from './Posts.module.css';

export const SORT_TYPES = {
    NONE: '',
    TITLE: 'title',
    BODY: 'body',
};

const DEFAULT_FILTER = {
    sort: SORT_TYPES.NONE,
    search: '',
};

const Posts = () => {
    const postsFooter = useRef();

    const pageOptions = [
        { value: 5, name: 5, },
        { value: 10, name: 10, },
    ];

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(DEFAULT_FILTER);
    const [modalActive, setModalActive] = useState(false);

    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const filteredPosts = usePosts(posts, filter.sort, filter.search);

    const [fetchPosts, postsLoading] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);

        const postTotalCount = response.headers['x-total-count'];
        setPageCount(getPageCount(postTotalCount, limit));
    });

    useObserver(postsLoading, page + 1 <= pageCount, postsFooter, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const setLimitHandler = event => {
        setLimit(event.target.value);
        setPage(1);
    };

    const addPost = post => {
        setPosts([
            ...posts,
            {
                id: posts.length + 1,
                ...post,
            },
        ]);

        setModalActive(false);
    };

    const deletePost = id => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <div>
            <h1 className={classes.title}>Posts</h1>
            <PostFilters filter={filter} setFilter={setFilter}/>

            <div className={classes.perPage}>
                <label className={classes.label}>Per page:</label>
                <Select options={pageOptions} value={limit} onChange={setLimitHandler}/>
            </div>

            <Modal title="Add post" active={modalActive} closeModal={() => setModalActive(false)}>
                <PostForm addPost={addPost}/>
            </Modal>
            <Button onClick={() => setModalActive(true)}>Add post</Button>

            <div className={classes.postList}>
                <PostList posts={filteredPosts} deletePost={deletePost}/>
                <div className={classes.postsListFooter} ref={postsFooter}/>
            </div>

            {postsLoading && <div className={classes.loader}><Loader/></div>}
        </div>
    );
};

export default Posts;
