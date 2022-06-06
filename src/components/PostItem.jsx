import React from 'react';
import Button from './UI/button/Button';
import classes from './PostItem.module.css';

const PostItem = ({ post, deletePost }) => {
    const { id, title, content } = post;

    return (
        <div className={classes.post}>
            <div>
                <h2 className={classes.title}>{ id }. { title }</h2>
                <div>{ content }</div>
            </div>
            <div>
                <Button onClick={() => deletePost(post.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;
