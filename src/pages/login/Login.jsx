import React from 'react'
import "./login.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from '../../components/OktaSignInWidget/OktaSignInWidget';
import { useOktaAuth } from '@okta/okta-react';

const Login = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Sign in error:', err);
    };

    if (!authState) {
        return <div>Loading ... </div>;
    }

    return authState.isAuthenticated ?
        <Redirect to={{ pathname: '/' }} /> :
        <div className="login">
            <Sidebar />
            <div className="loginContainer">
                <Navbar />
                <OktaSignInWidget className="loginWidget" config={config} onSuccess={onSuccess} onError={onError} />
            </div>
        </div>;
};

export default Login;