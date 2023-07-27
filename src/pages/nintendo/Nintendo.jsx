import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Platform from '../../components/platform/Platform'
import ChooseConsole from '../../components/choose_console/ChooseConsole'


import './nintendo.scss'



export default function Nintendo() {
    
    const {state} = useLocation()

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


    return (
        <div className='nintendo'>
            <h1>Nintendo</h1>

            <Routes>
                <Route index 
                    element={<ChooseConsole gameConsoleLinks={gameConsoleLinks} /> } 
                />
                
                <Route path="snes/*" 
                    element={<Platform gameConsole={"Super Nintendo Entertainment System"} />}
                />
            </Routes>
        </div>
    )
}
