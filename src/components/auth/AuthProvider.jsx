import React, { useState, useEffect, createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'

export const UserContext = createContext();



export function AuthProvider({ children }) {

    const [user, setUser] = useState({})

    useEffect(() => {

        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser)
                // console.log('change in <AuthProvider/> detected:', authUser)
            } else {
                setUser({})
                // console.log('user signOut detected in <AuthProvider/>')
            }
        })
        
    }, [])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
