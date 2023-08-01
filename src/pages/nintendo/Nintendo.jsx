import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Platform from '../../components/platform/Platform'
import ChooseConsole from '../../components/choose_console/ChooseConsole'


import './nintendo.scss'


const gameConsoleLinks = [
    {
        name: 'Nintendo Entertainment System (NES)',
        url: 'nes'
    },
    {
        name: 'Super Nintendo (SNES)',
        url: 'snes'
    },
    {
        name: 'Game Boy',
        url: 'game-boy'
    },
]


export default function Nintendo() {

    const [consolePicked, setConsolePicked] = useState(false)
    const [gameConsole, setGameConsole] = useState('')
    const [gameConsoleUrl, setGameConsoleUrl] = useState('')


    const handleClick = (name, url) => {
        setGameConsole(name)
        setGameConsoleUrl(url)
        setConsolePicked(true)
    }

    // EVERYTIME I REFRESH OR GO BACK ONTO SNES COMPONENT, I LOSE THE gameConsoleUrl PROPS VALUE
    // HOW TO FIX THIS

    return (
        <div className='nintendo'>
            <h1>Nintendo</h1>

            { !consolePicked 
            ?
            <ChooseConsole gameConsoleLinks={gameConsoleLinks} handleClick={handleClick} />
            :
            <Platform gameConsole={gameConsole} gameConsoleUrl={gameConsoleUrl}/> }

            {/* <Routes>
                <Route index 
                    element={
                    <ChooseConsole gameConsoleLinks={gameConsoleLinks} handleClick={handleClick} /> 
                    } 
                />
                
                <Route path={`${gameConsoleUrl}/*`} 
                    element={<Platform gameConsole={gameConsole} gameConsoleUrl={gameConsoleUrl}/>}
                />
            </Routes> */}
        </div>
    )
}
