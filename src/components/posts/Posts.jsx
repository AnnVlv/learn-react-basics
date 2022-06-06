import React, {useMemo, useState} from 'react';
import PostForm from './post-form/PostForm';
import PostFilters from './post-filters/PostFilters';
import PostList from './post-list/PostList';
import classes from './Posts.module.css';

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

    const sortedPosts = useMemo(() => {
        if (!filter.sort) {
            return posts;
        }

        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }, [posts, filter.sort]);

    const sortedAndSearchedPosts = useMemo(() => {
        if (!filter.search) {
            return sortedPosts;
        }

        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search.toLowerCase()));
    }, [sortedPosts, filter.search]);

    const addPost = post => {
        setPosts([
            ...posts,
            {
                id: posts.length + 1,
                ...post,
            },
        ]);
    }

    const deletePost = id => {
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <div>
            <h1 className={classes.title}>Posts</h1>
            <PostForm addPost={addPost}/>
            <PostFilters filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} deletePost={deletePost}/>
        </div>
    );
};

export default Posts;
