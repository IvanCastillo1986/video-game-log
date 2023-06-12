import React from 'react'
import GameForm from '../../components/game_form/GameForm'




export default function AddVG() {
    


    return (
        <div className='add-game'>
            <h1>Add a new game</h1>

            {/* title, region, year_released */}
            <GameForm />
        </div>
    )
}
