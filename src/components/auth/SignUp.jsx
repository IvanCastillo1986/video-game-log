import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import './sign-up.scss'


export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signUp(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            console.log(userCredentials)
            setEmail('')
            setPassword('')
        })
        .catch(err => console.log(err))
    }

    // when user is created on firebase, add that user with user id to Users table
    function addUser(e) {
        e.preventDefault()
        
    }
    


    return (
        <div className='sign-up'>
            <h2>Sign Up</h2>

            <form onSubmit={signUp}>
                <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
