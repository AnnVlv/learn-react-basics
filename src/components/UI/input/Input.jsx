import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            type="text"
            className={classes.input}
        />
    );
});

export default Input;
