import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Posts from './pages/posts/Posts';
import Counters from './pages/counters/Counters';
import Post from './pages/post/Post';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/posts/:id" element={<Post/>}/>
            <Route path="/counters" element={<Counters/>}/>
            <Route path="*" element={<Navigate replace to="/posts"/>}/>
        </Routes>
    );
};

export default AppRouter;
