import React, {useState} from 'react';
import PostForm from './post-form/PostForm';
import PostFilters from './post-filters/PostFilters';
import PostList from './post-list/PostList';
import Modal from '../UI/modal/Modal';
import Button from '../UI/button/Button';
import classes from './Posts.module.css';
import {usePosts} from '../../hooks/usePosts';

const DEFAULT_POSTS = [
    { id: 1, title: 'JavaScript', content: 'Some info about JavaScript...', },
    { id: 2, title: 'Python', content: 'Let\'s talk about Python...', },
    { id: 3, title: 'Goland', content: 'This is the article about Goland...', },
    { id: 4, title: 'Java', content: 'This is guide how to build REST API with Java...', },
];

export const SORT_TYPES = {
    NONE: '',
    TITLE: 'title',
    CONTENT: 'content',
};

const DEFAULT_FILTER = {
    sort: SORT_TYPES.NONE,
    search: '',
};

const Posts = () => {
    const [posts, setPosts] = useState(DEFAULT_POSTS);
    const [filter, setFilter] = useState(DEFAULT_FILTER);
    const [modalActive, setModalActive] = useState(false);

    const filteredPosts = usePosts(posts, filter.sort, filter.search);

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

            <div className={classes.postList}>
                <PostList posts={filteredPosts} deletePost={deletePost}/>
            </div>
        </div>
    );
};

export default Posts;
