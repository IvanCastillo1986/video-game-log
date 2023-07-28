import React from 'react'
import { useLocation } from 'react-router-dom'
import GameForm from '../../components/game_form/GameForm'

import './edit-game.scss'


export default function EditGame() {

    let { state } = useLocation()

    
    return (
        <div className='edit-game'>
            <h1>Edit your game</h1>
            <GameForm idx={state.idx}/>
        </div>
    )
}
