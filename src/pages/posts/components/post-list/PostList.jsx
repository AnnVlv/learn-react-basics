import React from 'react';
import PostItem from './post-item/PostItem';

const PostList = ({ posts, deletePost }) => {
    if (!posts.length) {
        return <div>No posts yet</div>;
    }

    return (
        <div>
            {posts.map((post) =>
                <PostItem
                    key={post.id}
                    post={post}
                    deletePost={deletePost}
                />
            )}
        </div>
    );
};

export default PostList;
