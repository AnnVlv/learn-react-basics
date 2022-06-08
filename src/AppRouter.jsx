import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Posts from './pages/posts/Posts';
import Counters from './pages/counters/Counters';
import Post from './pages/post/Post';

const routes = [
    { path: '/posts', element: <Posts/>},
    { path: '/posts/:id', element: <Post/>},
    { path: '/counters', element: <Counters/>},
    { path: '*', element: <Navigate replace to="/posts"/>},
];

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}) => <Route path={path} element={element} key={path}/>)}
        </Routes>
    );
};

export default AppRouter;
