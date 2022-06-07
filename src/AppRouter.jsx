import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Posts from './pages/posts/Posts';
import Counters from './pages/counters/Counters';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/counters" element={<Counters/>}/>
            <Route path="*" element={<Navigate replace to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;
