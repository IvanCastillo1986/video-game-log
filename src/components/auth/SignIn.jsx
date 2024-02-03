import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import LinkButton from '../../layout/link_button/LinkButton'

import "./sign-in.scss"


export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn (e) {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            setEmail('')
            setPassword('')
        })
        .catch(err => console.log('Error from SignInWithEmailAndPassword:', err))

    }


    return (
        <div className='sign-in'>
            <h2>Sign In</h2>
            <form onSubmit={signIn}>
                <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <LinkButton type="submit" message='Sign In'>Sign In</LinkButton>
            </form>
        </div>
    )
}
