import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from './auth/AuthProvider'


// This is different from the old <PrivateRoute /> formula before v6.
// The <Outlet /> component allows us to pass multiple routes in, instead of wrapping
// every component that needs a redirect inside of <PrivateRoute />
export default function PrivateRoutes() {

    const user = useContext(UserContext)


    return (
        user ? <Outlet /> : <Navigate to='/not-signed-in' />
    )
}
