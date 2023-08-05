import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { NintendoConsoleLinks } from "../../models/NintendoLinks"
import { SegaConsoleLinks } from "../../models/SegaLinks"

import './chooseConsole.scss'



export default function ChooseConsole() {

    const [gameConsoles, setGameConsoles] = useState([])
    const { company } = useLocation().state

    useEffect(() => {
        if (company === 'nintendo') {
            setGameConsoles(NintendoConsoleLinks)
        } else if (company === 'sega') {
            setGameConsoles(SegaConsoleLinks)
        }
    }, [company])
    

    return (
        <div className='choose-console'>
            <h2>Which console would you like to browse through?</h2>

            <ul>
                { gameConsoles &&
                gameConsoles.map(gameConsole => 
                    <li key={gameConsole.name}> 
                        <Link 
                            to={`/${company}/${gameConsole.url}`} 
                            state={{ 
                                gameConsole: gameConsole.name, gameConsoleUrl: gameConsole.url, 
                            }}
                        >
                            {gameConsole.name}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
