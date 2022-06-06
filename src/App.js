import React, {useMemo, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';
import Input from './components/UI/input/Input';
import classes from './App.module.css';

const DEFAULT_POSTS = [
    { id: 1, title: 'JavaScript', content: 'Some info about JavaScript...', },
    { id: 3, title: 'Goland', content: 'This is the article about Goland...', },
    { id: 2, title: 'Python', content: 'Let\'s talk about Python...', },
];

const SORT_TYPES = {
    NONE: '',
    TITLE: 'title',
    CONTENT: 'content',
};

const SORT_OPTIONS = [
    { name: 'By title', value: SORT_TYPES.TITLE, },
    { name: 'By content', value: SORT_TYPES.CONTENT, },
];

function App() {
    const [posts, setPosts] = useState(DEFAULT_POSTS);
    const [sortType, setSortType] = useState(SORT_TYPES.NONE);
    const [search, setSearch] = useState('');

    const sortedPosts = useMemo(() => {
        if (!sortType) {
            return posts;
        }

        return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]))
    }, [posts, sortType]);

    const sortedAndSearchedPosts = useMemo(() => {
        if (!search) {
            return sortedPosts;
        }

        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    }, [sortedPosts, search]);

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

    const sortPosts = sortType => {
        setSortType(sortType);
    }

    return (
        <div className={classes.app}>
            <h1 className={classes.title}>Posts</h1>

            <PostForm addPost={addPost}/>

            <div className={classes.filters}>
                <label className={classes.label}>Search:</label>
                <Input
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />

                <label className={classes.label}>Sort by:</label>
                <Select
                    defaultOptionTitle={'Sort by'}
                    defaultOptionDisabled={true}
                    options={SORT_OPTIONS}
                    value={sortType}
                    onChange={event => sortPosts(event.target.value)}
                />
            </div>

            <PostList posts={sortedAndSearchedPosts} deletePost={deletePost}/>
        </div>
    );
}

export default App;
