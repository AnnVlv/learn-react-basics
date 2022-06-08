import React, {useContext} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';
import Login from './pages/login/Login';
import {AuthContext} from './context';

const publicRoutes = [
    { path: '/login', element: <Login/>},
];

const privateRoutes = [
    { path: '/', element: <h1>Home</h1>},
    { path: '/posts', element: <Posts/>},
    { path: '/posts/:id', element: <Post/>},
];

const commonRoutes = [
    { path: '/common', element: <h1>Common page</h1>},
];

const AppRouter = () => {
    const { isAuth, loading } = useContext(AuthContext);
    if (loading) {
        return <div></div>;
    }

    const wrongRoute = { path: '*', element: <Navigate replace to={isAuth ? '/' : '/login'}/> };
    const routes = [
        ...commonRoutes,
        ...(isAuth ? privateRoutes : publicRoutes),
        wrongRoute,
    ];

    return (
        <Routes>
            {routes.map(({path, element}) => <Route path={path} element={element} key={path}/>)}
        </Routes>
    );
};

export default AppRouter;
