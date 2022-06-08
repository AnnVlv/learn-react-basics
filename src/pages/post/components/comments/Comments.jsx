import React from 'react';
import classes from './Comments.module.css';

const Comments = ({ comments }) => {
    return (
        <div>
            {comments.map(({email, name, id}) =>
                <div className={classes.comment} key={id}>
                    <span className={classes.commentEmail}>{email}</span>: {name}
                </div>
            )}
        </div>
    );
};

export default Comments;
