import React from 'react';
import classes from './Button.module.css';

const Button = React.forwardRef(({ children, ...props }, ref) => {
    return (
        <button
            {...props}
            ref={ref}
            className={classes.button}
        >
            { children }
        </button>
    );
});

export default Button;
