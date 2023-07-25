import React from 'react'
import { Link } from 'react-router-dom'

import './chooseConsole.scss'



export default function ChooseConsole({ gameConsoleLinks }) {

    
    return (
        <div className='choose-console'>
            <h2>Which console would you like to browse through?</h2>

            <ul>
                {gameConsoleLinks.map(gameConsole => 
                    <li key={gameConsole.name}> <Link to={gameConsole.url}>{gameConsole.name}</Link> </li>
                )}
            </ul>
        </div>
    )
}
