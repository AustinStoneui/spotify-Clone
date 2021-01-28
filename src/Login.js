import React from 'react';
import './Login.css';
import { LoginUrl } from './spotify';

function Login() {
    return (
        <div className="Login">
            <h1>Login page</h1>
            <img src="" alt="Bump" />
            <a href={LoginUrl}>Login</a>
        </div>
    )
}

export default Login
