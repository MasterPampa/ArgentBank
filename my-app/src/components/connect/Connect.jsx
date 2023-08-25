import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { getProfile } from '../actions/getProfileActions'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie library

import "./Connect.css"

const Connect = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        
        if (rememberMe) {
            Cookies.set('rememberMe', JSON.stringify({ username, password}, { expires: 7 }))
        } else {
            Cookies.remove('rememberMe')
        }

        dispatch(login(username, password));
    }

    useEffect(() => {
        const rememberMeCookie = Cookies.get('rememberMe');
        if (rememberMeCookie) {
            setRememberMe(!rememberMe) ;
            const { username, password } = JSON.parse(rememberMeCookie);
            setUsername(username);
            setPassword(password);
        }
    }, []);
    
    useEffect(() => {
        if (isAuthenticated === true) {
            dispatch(getProfile());
            navigate('/user');
        }
    }, [isAuthenticated, dispatch, navigate]);
    

    return(
        <main className="signin">
            <section className="signin__window">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={e => setUsername(e.target.value)} value={username}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={e => setPassword(e.target.value)} autoComplete="true" value={password}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)}/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )
}

export default Connect;