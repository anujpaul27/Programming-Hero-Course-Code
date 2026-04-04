import React from 'react';
import { useParams } from 'react-router';

const Login = () => {
    const param = useParams()
    console.log(param);
    return (
        <div>
            <h1>This is a login page as well </h1>
        </div>
    );
};

export default Login;