import React from 'react'
import { Link } from 'react-router-dom'

import './link-button.scss'



export default function LinkButton({ url, message, btnStyle, btnContainerStyle }) {

    
    return (
        <div className='link-btn-container' style={btnContainerStyle}>
            { url ?
                <Link className='link-btn-container__button' to={url} style={btnStyle}> {message} </Link>
                :
                <button className='link-btn-container__button' >{message}</button>
            }
        </div>
    )
}
