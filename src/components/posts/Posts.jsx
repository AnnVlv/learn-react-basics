import React, {useEffect, useMemo, useState} from 'react';
import PostForm from './post-form/PostForm';
import PostFilters from './post-filters/PostFilters';
import PostList from './post-list/PostList';
import Modal from '../UI/modal/Modal';
import Button from '../UI/button/Button';
import classes from './Posts.module.css';
import Loader from '../UI/loader/Loader';
import Pagination from '../UI/pagination/Pagination';
import {usePosts} from '../../hooks/usePosts';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import {getArray, getPageCount} from '../../utils/getPageCount';

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
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(DEFAULT_FILTER);
    const [modalActive, setModalActive] = useState(false);

    const [limit] = useState(5);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const filteredPosts = usePosts(posts, filter.sort, filter.search);

    const [fetchPosts, postsLoading, postsError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);

        const postTotalCount = response.headers['x-total-count'];
        setPageCount(getPageCount(postTotalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

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

            <Modal title="Add post" active={modalActive} closeModal={() => setModalActive(false)}>
                <PostForm addPost={addPost}/>
            </Modal>
            <Button onClick={() => setModalActive(true)}>Add post</Button>

            {postsError
                ? <div className={classes.errorMessage}>{postsError}</div>
                : <div className={classes.postList}>
                    {postsLoading
                        ? <div className={classes.loader}><Loader/></div>
                        :
                        <div>
                            <PostList posts={filteredPosts} deletePost={deletePost}/>
                            <div className={classes.pagination}>
                                <Pagination pageCount={pageCount} activePage={page} setPage={setPage}/>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Posts;
