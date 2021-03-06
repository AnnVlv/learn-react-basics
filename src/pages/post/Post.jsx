import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import Loader from '../../UI/loader/Loader';
import Comments from './components/comments/Comments';
import classes from './Post.module.css';

const Post = () => {
    const { id: postId } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    const [fetchPost, postLoading, postError] = useFetching(async (postId) => {
        const response = await PostService.getById(postId);
        setPost(response.data);
    });

    const [fetchComments] = useFetching(async (postId) => {
        const response = await PostService.getComments(postId);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPost(postId);
        fetchComments(postId);
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
            <div className={classes.comments}>
                <Comments comments={comments}/>
            </div>
        </div>
    );
};

export default Post;
