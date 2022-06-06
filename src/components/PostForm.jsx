import React, {useState} from 'react';
import Input from './UI/input/Input';
import Textarea from './UI/textarea/Textarea';
import Button from './UI/button/Button';
import classes from './PostForm.module.css';

const DEFAULT_POST = {
    title: '',
    content: '',
};

const PostForm = ({ addPost }) => {
    const [post, setPost] = useState(DEFAULT_POST);

    const addPostHandler = event => {
        event.preventDefault();

        addPost({
            title: post.title?.trim(),
            content: post.content?.trim(),
        });
        setPost(DEFAULT_POST);
    };

    const setPostTitle = title => {
        setPost({ ...post, title });
    }

    const setPostContent = content => {
        setPost({ ...post, content });
    }

    return (
        <form className={classes.form} onSubmit={addPostHandler}>
            <Input value={post.title} onChange={event => setPostTitle(event.target.value)}/>
            <Textarea value={post.content} onChange={event => setPostContent(event.target.value)}/>
            <Button>Add post</Button>
        </form>
    );
};

export default PostForm;
