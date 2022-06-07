import React from 'react';
import Button from '../../../UI/button/Button';
import classes from './PostItem.module.css';

const PostItem = ({ post, index, deletePost }) => {
    const { title, body } = post;

    return (
        <div className={classes.post}>
            <div>
                <h2 className={classes.title}>{ index }. { title }</h2>
                <div>{ body }</div>
            </div>
            <div>
                <Button onClick={() => deletePost(post.id)}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;
