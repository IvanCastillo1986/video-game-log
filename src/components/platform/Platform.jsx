import React, { useState } from 'react'
import LinkButton from '../../layout/link_button/LinkButton'

import './platform.scss'



export default function Platform({ console, games }) {
    

    const gamesList = games.map(game => 
        <>
            <li>
                <p>Name: {game.name} | Region: {game.region} | Year Released: {game.date_released}</p>
            </li>
        </>
    )

    return (
        <div className='platform'>
            <h2>{console}</h2>
            <div><LinkButton url="add-vg" message="Add Game" style={{animation: 'glimmer 3s infinite'}}></LinkButton></div>

            <h2>Games</h2>
            <ul>
                {gamesList}
            </ul>
        </div>
    )
}
