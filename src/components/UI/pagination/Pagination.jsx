import React, {useMemo} from 'react';
import classes from './Pagination.module.css';
import {getArray} from '../../../utils/getPageCount';

const Pagination = ({ pageCount, activePage, setPage }) => {
    const pages = useMemo(() => getArray(pageCount), [pageCount]);

    return (
        <div className={classes.pagination}>
            {pages.map(page =>
                <div
                    key={page}
                    className={[classes.page, page === activePage && classes.active].join(' ')}
                    onClick={() => setPage(page)}
                >
                    {page}
                </div>
            )}
        </div>
    );
};

export default Pagination;
