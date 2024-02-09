import React from 'react';

import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/auth/SignUp';
import AuthDetails from '../../components/auth/AuthDetails';

import './home.scss';


export default function Home() {


    return (
        <div className='home'>
            <h1>Welcome</h1>

            <SignIn />
            <SignUp />
            <AuthDetails />
        </div>
    );
};
