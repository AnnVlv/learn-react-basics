import React, {useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';
import Navbar from './UI/navbar/Navbar';
import {AuthContext} from './context';
import classes from './App.module.css';

const navbarLinks = [
    { to: '/', title: 'Home', },
    { to: '/posts', title: 'Posts', },
];

const AUTH_KEY = 'auth';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const isAuth = localStorage.getItem(AUTH_KEY);
        if (isAuth) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (isAuth) {
            localStorage.setItem(AUTH_KEY, true.toString());
        } else {
            localStorage.removeItem(AUTH_KEY);
        }
    }, [isAuth]);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, loading}}>
            <BrowserRouter>
                <Navbar links={navbarLinks}/>
                <div className={classes.app}>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
