import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, title, active, closeModal }) => {
    const rootClasses = [classes.modal, active ? classes.active : ''].join(' ');

    return (
        <div className={rootClasses} onClick={closeModal}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                <h2 className={classes.title}>{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default Modal;
