import React from 'react'
import { Link } from 'react-router-dom'

import './link-button.scss'



export default function LinkButton({ url, message, style }) {

    
    return (
        <div className='link-btn-container'>
            <Link className='link-btn-container__button' to={url} style={style}>{message}</Link>
        </div>
    )
}
