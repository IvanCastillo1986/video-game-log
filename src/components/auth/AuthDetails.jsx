import React, { useState, useEffect, useContext } from 'react'
import { onAuthStateChanged, signOut, deleteUser } from 'firebase/auth'
import { auth } from '../../firebase'
import { UserContext } from '../../App'
import axios from 'axios'

import LinkButton from '../../layout/link_button/LinkButton'

import './auth-details.scss'

const API = process.env.REACT_APP_API_URL



export default function AuthDetails() {

    const [authUser, setAuthUser] = useState(null)

    const {user, setUser} = useContext(UserContext)


    /*
        This is an authentication state observer.
        Everytime the authUser state changes, the useEffect will trigger onAuthStateChanged()
        It also populates our UserContext{}
    */
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
            setUser({})
        })
        .catch(err => console.log(`Error signing out ${err}`))
    }

    function handleDeleteUser(user) {

        deleteUser(user)
        .then((deletedUser) => {
            // console.log('user deleted from Firebase:', deletedUser)
            
            // also deleting user from backend API
            axios.delete(`${API}/users/${user.uid}`)
            .then(res => {
                // console.log('user deleted from back-end API:', res)
            })
            .catch((err) => console.log('Error deleting from back-end API:', err))
        })
        .catch(err => console.log('Error deleting from Firebase:', err))
    }
    


    return (
        <div className='auth-details'>
            <h3>User Status</h3>
            { authUser ?
            <>
                <div className='auth-details__user-div'>
                    <p>Signed in as {authUser.email}</p> 
                    <LinkButton 
                        message="Delete Account" 
                        btnContainerStyle={{display: "inline"}} 
                        btnStyle={{color: "red", boxShadow: "0 0 13px 3px red"}}
                        btnClick={() => handleDeleteUser(authUser)}
                    />
                </div>

                <LinkButton btnClick={handleSignOut} message={'Sign Out'}></LinkButton>
            </>
            :
            <p>Signed out</p>
            }
        </div>
    )
}
