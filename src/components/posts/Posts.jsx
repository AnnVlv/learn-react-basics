import React, {useEffect, useState} from 'react';
import PostForm from './post-form/PostForm';
import PostFilters from './post-filters/PostFilters';
import PostList from './post-list/PostList';
import Modal from '../UI/modal/Modal';
import Button from '../UI/button/Button';
import classes from './Posts.module.css';
import Loader from '../UI/loader/Loader';
import {usePosts} from '../../hooks/usePosts';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';

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

    const filteredPosts = usePosts(posts, filter.sort, filter.search);

    const [fetchPosts, postsLoading, postsError] = useFetching(async () => {
        const posts = await PostService.getAll();
        setPosts(posts);
    });

    useEffect(() => {
        fetchPosts();
    }, []);

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
                        : <PostList posts={filteredPosts} deletePost={deletePost}/>
                    }
                </div>
            }
        </div>
    );
};

export default Posts;
