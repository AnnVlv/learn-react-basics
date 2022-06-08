import React, {useContext} from 'react';
import {AuthContext} from '../../context';
import Button from '../../UI/button/Button';

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    return (
        <div>
            <h1 style={{marginBottom: '20px'}}>Login</h1>
            <Button onClick={() => setIsAuth(true)}>Login</Button>
        </div>
    );
};

export default Login;
