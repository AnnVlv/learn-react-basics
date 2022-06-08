import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../../../../UI/button/Button';
import classes from './PostItem.module.css';

const PostItem = ({ post, deletePost }) => {
    const navigate = useNavigate();

    const { id, title, body } = post;

    const deletePostHandler = event => {
        event.stopPropagation();
        deletePost(post.id);
    };

    return (
        <div className={classes.post} onClick={() => navigate(`/posts/${id}`)}>
            <div>
                <h2 className={classes.title}>{ id }. { title }</h2>
                <div>{ body }</div>
            </div>
            <div>
                <Button onClick={deletePostHandler}>Delete</Button>
            </div>
        </div>
    );
};

export default PostItem;
