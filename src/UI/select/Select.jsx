import React from 'react';
import classes from './Select.module.css';

const Select = React.forwardRef(({ defaultOptionTitle, defaultOptionDisabled, options, ...props }, ref) => {
    return (
        <select
            {...props}
            ref={ref}
            className={classes.select}
        >
            {
                defaultOptionTitle &&
                <option value={''} disabled={defaultOptionDisabled}>
                    {defaultOptionTitle}
                </option>
            }

            {
                options.map(option => <option value={option.value} key={option.value}>
                    {option.name}
                </option>)
            }
        </select>
    );
});

export default Select;
