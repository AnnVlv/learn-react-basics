import React from 'react';
import classes from './App.module.css';
import Posts from './components/posts/Posts';

const App = () => {
    return (
        <div className={classes.app}>
            <Posts/>
        </div>
    );
}

export default App;
