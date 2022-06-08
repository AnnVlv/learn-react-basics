import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';
import {AuthContext} from '../../context';

const Navbar = ({ links }) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

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

            {isAuth &&
                <span
                    className={[classes.navItem, classes.logout].join(' ')}
                    onClick={() => setIsAuth(false)}
                >
                    Logout
                </span>
            }
        </div>
    );
};

export default Navbar;
