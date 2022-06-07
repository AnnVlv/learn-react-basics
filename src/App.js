import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import classes from './App.module.css';
import Navbar from './UI/navbar/Navbar';
import AppRouter from "./AppRouter";

const navbarLinks = [
    { to: '/posts', title: 'Posts', },
    { to: '/counters', title: 'Counters', },
];

const App = () => {
    return (
        <BrowserRouter>
            <Navbar links={navbarLinks}/>
            <div className={classes.app}>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
