import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../../UI/loader/Loader';
import classes from './Post.module.css';

const Post = () => {
    const { id: postId } = useParams();
    const [post, setPost] = useState(null);

    const [fetchPost, postLoading, postError] = useFetching(async (postId) => {
        const response = await PostService.getById(postId);
        setPost(response.data);
    });

    useEffect(() => {
        fetchPost(postId);
    }, []);

    if (postError) {
        return (
            <div>
                <h1 className={classes.title}>Post #{postId}</h1>
                <div className={classes.errorMessage}>{postError}</div>
            </div>
        );
    }

    if (postLoading || !post) {
        return <div className={classes.loader}><Loader/></div>;
    }

    return (
        <div>
            <h1 className={classes.title}>{post.title}</h1>
            <div>{post.body}</div>
        </div>
    );
};

export default Post;
