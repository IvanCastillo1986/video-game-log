import React, { useState } from 'react'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'
import { auth } from '../../firebase'
import LinkButton from '../../layout/link_button/LinkButton'

import "./sign-in.scss"


export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signIn (e) {
        e.preventDefault()

        // This is not yet holding persistence across page refreshes
        setPersistence(auth, browserSessionPersistence)
        .then(() => {

            return signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                setEmail('')
                setPassword('')
            })
            .catch(err => console.log('Error from SignInWithEmailAndPassword:', err))

        }).catch((err) => {
            console.log('Error in setPersistence at SignIn:', err)
        })
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
