import {createContext} from 'react';

export const AuthContext = createContext({
    loading: true,
    isAuth: false,
    setIsAuth: null,
});
