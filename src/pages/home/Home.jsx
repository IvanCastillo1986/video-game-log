import React from 'react'

import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'


export default function Home() {


    return (
        <div className='home'>
            <h1>Welcome</h1>

            <SignIn />
            <SignUp />
        </div>
    )
}
