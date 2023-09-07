import React, { useState, useEffect, useContext } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { UserContext } from '../../App'

import LinkButton from '../../layout/link_button/LinkButton'


export default function AuthDetails() {

    const [authUser, setAuthUser] = useState(null)


    // console.log(authUser)
    const {user, setUser} = useContext(UserContext)
    // console.log(user)

    // everytime the authUser state changes, the useEffect will trigger onAuthStateChanged()
    useEffect(() => {

        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setUser(user)
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
        .then(() => {
            console.log('Signed out successfully')
            setUser({})
        })
        .catch(err => console.log(`Error signing out ${err}`))
    }



    return (
        <div className='auth-details'>
            <h3>User Status</h3>
            { authUser ?
            <>
                <p>Signed in as {authUser.email}</p>
                <LinkButton handleShowInfo={handleSignOut} message={'Sign Out'}></LinkButton>
            </>
            :
            <p>Signed out</p>
            }
        </div>
    )
}
