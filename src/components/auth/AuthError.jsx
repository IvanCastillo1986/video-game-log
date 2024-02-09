import React from 'react'



export default function AuthError({ message }) {


    return (
        <p className='auth-error' style={{ visibility: message?.length ? 'visible' : 'hidden' }}>
            {message?.length > 0 && message}
        </p>
    );
};
