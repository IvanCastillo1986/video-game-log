import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Platform from '../../components/consoles/Platform'
import ChooseConsole from '../../components/ChooseConsole'
import { snesGames } from '../../models/snesGames'

import './nintendo.scss'



export default function Nintendo() {

    const consoleLinks = [
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
                <Route index element={<ChooseConsole consoleLinks={consoleLinks} /> } />
                <Route path="snes" element={<Platform console={"Super Nintendo Entertainment System"} games={snesGames} />}/>
            </Routes>
        </div>
    )
}
