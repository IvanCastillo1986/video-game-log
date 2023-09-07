import React from 'react'

import LinkButton from '../../layout/link_button/LinkButton'



export default function UserMustSignIn() {

    return (
        <div>
            <p>We want to give you a great experience.</p>
            <p>However, the user has not signed in, so there are no games to display.</p>
            <p>Please sign in.</p>

            <LinkButton message='Home' url='/' btnStyle={{width: "80px", marginTop: "60px"}} />
        </div>
    )
}
