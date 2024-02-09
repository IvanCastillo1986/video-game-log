import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { userFormValidations } from '../../validations'

import LinkButton from '../../layout/link_button/LinkButton';
import AuthError from './AuthError';

import "./sign-in.scss";


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    function signIn (e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            setEmail('');
            setPassword('');
        })
        .catch(err => {
            // console.log('Error at SignIn:', err)
            setError(userFormValidations(err, {email, password}))
        });
    };

    function handleChange(e) {
        setEmail(e.target.value);
        setError('')
    };


    return (
        <div className='sign-in'>
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <input type="email" placeholder='E-mail' value={email} onChange={handleChange} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <LinkButton type="submit" message='Sign In'>Sign In</LinkButton>
            </form>
            <AuthError message={error} />
        </div>
    );
};
