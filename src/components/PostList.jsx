import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, deletePost }) => {
    return (
        <div>
            {
                posts.length
                    ? posts.map((post, index) => <PostItem key={post.id} index={index + 1} post={post} deletePost={deletePost}/>)
                    : 'No posts yet'
            }
        </div>
    );
};

export default PostList;
