import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import LinkButton from '../../layout/link_button/LinkButton'
import axios from 'axios'
import { signUpValidations, signUpErrors } from '../../validations'

import AuthError from './AuthError'

import './sign-up.scss'

const API = process.env.REACT_APP_API_URL


export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function signUp(e) {
        e.preventDefault()

        const errorMessages = signUpValidations({email, password})
        
        if (errorMessages) {
            console.log('error:', errorMessages);
            setError(errorMessages)
        } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                axios.post(`${API}/users`, {
                    email: userCredentials.user.email,
                    uuid: userCredentials.user.uid
                })
            })
            .then(() => {
                setEmail('')
                setPassword('')
            })
            .catch(err => {
                console.log('Error at SignUp:', err)
                const firebaseError = signUpErrors(err)
                setError(firebaseError);
            })
        }
    }
    
    const handleEmailChange = (e) => {
        setEmail(() => e.target.value)
        setError('')
    }
    const handlePasswordChange = (e) => {
        setPassword(() => e.target.value)
        setError('')
    }


    return (
        <div className='sign-up'>
            <h2>Sign Up</h2>

            <form onSubmit={signUp}>
                <input type="email" placeholder='E-mail' value={email} onChange={handleEmailChange} />
                <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
                <LinkButton type="submit" message='Sign Up'>Sign Up</LinkButton>

                {
                    Array.isArray(error) 
                    ?
                    error.map((err, idx) => {
                        return <AuthError key={idx} message={err} />
                    })
                    :
                    <AuthError message={error} />
                }
            </form>
        </div>
    )
}
