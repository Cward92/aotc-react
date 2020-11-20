import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AxiosHelper from '../Components/Helper/AxiosHelper';
import AppContext from '../Components/Helper/AppContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setToken } = useContext(AppContext);

    const clickHandler = () => {
        const data = {
            username: email,
            password,
            client_id: '2',
            client_secret: 'cp42HUYlGxdbnnRkEyHKImoZpIDGldoR6y2ORRCy',
            grant_type: 'password',
            scope: ''
        };

        AxiosHelper({ method: 'post', route: '/v1/oauth/token', fun: setToken, data })
    }

    const logout = () => {
        sessionStorage.clear();
        setToken('');
    }

    return (
        <>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} aria-describedby="emailHelpId" placeholder="" />
                <small id="emailHelpId" className="form-text text-muted">Help text</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} placeholder="" />
            </div>
            <button className="btn btn-success btn-large" onClick={clickHandler}>Submit</button>
            <button className="btn btn-secondary btn-large" onClick={logout}>Logout</button>
            <Link to='/register'>Register</Link>
            <Link to='/userhello'>User's Hello</Link>
        </>
    )
}