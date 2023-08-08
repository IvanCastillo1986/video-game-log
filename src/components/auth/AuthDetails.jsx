import React, { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'



export default function AuthDetails() {

    const [authUser, setAuthUser] = useState(null)

    // everytime the authUser state changes, the useEffect will trigger onAuthStateChanged()
    useEffect(() => {

        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }

    }, [])

    // when we click Sign Out button, it will trigger the handler. This uses the Firebase signOut() function
    // WRITE HANDLER FUNCTION
    function handleSignOut() {
        signOut(auth)
        .then(() => console.log('Signed out successfully'))
        .catch(err => console.log(`Error signing out ${err}`))
    }



    return (
        <div className='auth-details'>
            <h3>AuthUser Status</h3>
            { authUser ?
            <>
                <p>Signed in as {authUser.email}</p>
                <button onClick={handleSignOut}>Sign Out</button>
            </>
            :
            <p>Signed out</p>
            }
        </div>
    )
}