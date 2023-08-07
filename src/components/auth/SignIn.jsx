import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

import "./sign-in.scss"



export default function SignIn() {

    console.log(auth)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn (e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => console.log(userCredentials))
        .catch(err => console.log(err))
    }


    return (
        <div className='sign-in'>
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}