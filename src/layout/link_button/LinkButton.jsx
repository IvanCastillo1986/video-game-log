import React from 'react'
import { Link } from 'react-router-dom'

import './link-button.scss'



export default function LinkButton({ url, message, btnStyle, btnContainerStyle, handleShowInfo, game }) {

    
    return (
        <div className='link-btn-container' style={btnContainerStyle}>
            { url ?
                <Link className='link-btn-container__button' to={url} style={btnStyle} state={{game: game}}> {message} </Link>
                :
                <button onClick={handleShowInfo} className='link-btn-container__button' >{message}</button>
            }
        </div>
    )
}
