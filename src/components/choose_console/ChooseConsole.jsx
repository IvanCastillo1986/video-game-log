import React from 'react'
import { Link } from 'react-router-dom'

import './chooseConsole.scss'



export default function ChooseConsole({ consoleLinks }) {

        
    return (
        <div className='choose-console'>
            <h2>Which console would you like to browse through?</h2>

            <ul>
                {consoleLinks.map(console => 
                    <li> <Link to={console.url}>{console.name}</Link> </li>
                )}
            </ul>
        </div>
    )
}
