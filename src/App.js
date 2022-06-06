import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const DEFAULT_POSTS = [
    { id: 1, title: 'JavaScript', content: 'About JavaScript...', },
    { id: 2, title: 'Python', content: 'About Python...', },
    { id: 3, title: 'Goland', content: 'About Goland...', },
];

function App() {
    const [posts, setPosts] = useState(DEFAULT_POSTS);

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
            <PostForm addPost={addPost}/>
            <PostList posts={posts} deletePost={deletePost}/>
        </div>
    );
}

export default App;
