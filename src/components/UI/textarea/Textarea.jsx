import React from 'react';
import classes from './Textarea.module.css';

const Textarea = React.forwardRef((props, ref) => {
    return (
        <textarea
            {...props}
            ref={ref}
            className={classes.textarea}
        />
    );
});

export default Textarea;
