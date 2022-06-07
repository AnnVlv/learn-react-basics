import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = ({ links }) => {
    return (
        <div className={classes.navbar}>
            {links.map(link =>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => [classes.navItem, isActive && classes.active].join(' ')}
                    key={link.to}
                >
                    {link.title}
                </NavLink>
            )}
        </div>
    );
};

export default Navbar;
