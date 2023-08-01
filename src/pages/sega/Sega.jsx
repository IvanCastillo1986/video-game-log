import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Platform from '../../components/platform/Platform'
import ChooseConsole from '../../components/choose_console/ChooseConsole'


import './sega.scss'


const gameConsoleLinks = [
    {
        name: 'Master System',
        url: 'master-system'
    },
    {
        name: 'Sega Genesis',
        url: 'sega-genesis'
    },
    {
        name: 'Sega Saturn',
        url: 'sega-saturn'
    },
]


export default function Sega() {

    const [gameConsole, setGameConsole] = useState('')
    const [gameConsoleUrl, setGameConsoleUrl] = useState('')


    const handleClick = (name, url) => {
        setGameConsole(name)
        setGameConsoleUrl(url)
    }


    return (
        <div className='sega'>
            <h1>Sega</h1>

            <Routes>
                <Route index 
                    element={
                    <ChooseConsole gameConsoleLinks={gameConsoleLinks} handleClick={handleClick} /> 
                    } 
                />
                
                <Route path={`${gameConsoleUrl}/*`} 
                    element={<Platform gameConsole={gameConsole} gameConsoleUrl={gameConsoleUrl}/>}
                />
            </Routes>
        </div>
    )
}
