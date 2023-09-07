import React, { useState, useEffect, useContext } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { UserContext } from '../../App'
import axios from 'axios'

import LinkButton from '../../layout/link_button/LinkButton'

const API = process.env.REACT_APP_API_URL


export default function AuthDetails() {

    const [authUser, setAuthUser] = useState(null)

    const {user, setUser} = useContext(UserContext)


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

    function handleDeleteUser() {
        axios.delete(`${API}/users/${user.uid}`)
            .then(res => console.log(res))
    }



    return (
        <div className='auth-details'>
            <h3>User Status</h3>
            { authUser ?
            <>
                <div>
                    <p>Signed in as {authUser.email}</p> 
                    <LinkButton message="Deactivate" btnContainerStyle={{display: "inline-block"}} btnClick={handleDeleteUser}/>
                </div>
                <LinkButton btnClick={handleSignOut} message={'Sign Out'}></LinkButton>
            </>
            :
            <p>Signed out</p>
            }
        </div>
    )
}
