import React, { useState, useEffect, createContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'

export const UserContext = createContext();



export function AuthProvider({ children }) {

    const [user, setUser] = useState({})

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                setUser(authUser)
                // console.log('change in <AuthProvider/> detected:', authUser)
            } else {
                setUser(null)
                // console.log('user signOut detected in <AuthProvider/>')
            }
        })

        return () => unsubscribe()
        
    }, [])


    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
