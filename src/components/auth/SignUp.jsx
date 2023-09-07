import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import LinkButton from '../../layout/link_button/LinkButton'
import axios from 'axios'

import './sign-up.scss'

const API = process.env.REACT_APP_API_URL

export default function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function signUp(e) {
        e.preventDefault()

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
        .catch(err => console.log(err))

    }
    


    return (
        <div className='sign-up'>
            <h2>Sign Up</h2>

            <form onSubmit={signUp}>
                <input type="email" placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                <LinkButton type="submit" message='Sign Up'>Sign Up</LinkButton>
            </form>
        </div>
    )
}
