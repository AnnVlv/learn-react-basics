import React from 'react';
import {SORT_TYPES} from '../../Posts';
import Select from '../../../../UI/select/Select';
import Input from '../../../../UI/input/Input';
import classes from './PostFilters.module.css';

const PostFilters = ({ filter, setFilter }) => {
    const sortOptions = [
        { name: 'By title', value: SORT_TYPES.TITLE, },
        { name: 'By content', value: SORT_TYPES.BODY, },
    ];

    return (
        <div className={classes.filters}>
            <label className={classes.label}>Search:</label>
            <Input
                value={filter.search}
                onChange={event => setFilter({ ...filter, search: event.target.value })}
            />

            <label className={classes.label}>Sort by:</label>
            <Select
                defaultOptionTitle={'Sort by'}
                defaultOptionDisabled={true}
                options={sortOptions}
                value={filter.sort}
                onChange={event => setFilter({ ...filter, sort: event.target.value })}
            />
        </div>
    );
};

export default PostFilters;
