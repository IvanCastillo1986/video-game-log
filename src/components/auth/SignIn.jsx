import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { signInValidations, signInErrors } from '../../validations';

import LinkButton from '../../layout/link_button/LinkButton';
import AuthError from './AuthError';

import "./sign-in.scss";


export default function SignIn() {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');


    function signIn (e) {
        e.preventDefault();
        let errorMessage = signInValidations(input);

        if (errorMessage) {
            console.log('error:', errorMessage);
            setError(errorMessage);
        } else {
            signInWithEmailAndPassword(auth, input.email, input.password)
            .then(userCredential => {
                setInput({email: '', password: ''})
            }).catch(err => {
                console.log('Error at SignIn:', err)
                errorMessage = signInErrors(err)
                setError(errorMessage);
            });
        }
    };

    function handleChangeInput(e) {
        setInput((prevInput) => ({...prevInput, [e.target.type]: e.target.value}));
        setError('');
    };


    return (
        <div className='sign-in'>
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <input type="email" placeholder='E-mail' value={input.email} onChange={handleChangeInput} />
                <input type="password" placeholder='Password' value={input.password} onChange={handleChangeInput} />
                <LinkButton type="submit" message='Sign In'>Sign In</LinkButton>
            </form>
            <AuthError message={error} />
        </div>
    );
};
