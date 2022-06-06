import React from 'react';
import PostItem from './PostItem';
import classes from './PostList.module.css';

const PostList = ({ posts, deletePost }) => {
    return (
        <div className={classes.postList}>
            <h1 className={classes.title}>Posts</h1>
            {
                posts.length
                    ? posts.map(post => <PostItem key={post.id} post={post} deletePost={deletePost}/>)
                    : 'No posts yet'
            }
        </div>
    );
};

export default PostList;
