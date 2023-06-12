import React, { useState } from 'react'
import LinkButton from '../../layout/link_button/LinkButton'

import './platform.scss'



export default function Platform({ console, games }) {
    

    const gamesList = games.map(game => 
        <>
            <li className='platform__game'>
                <span>Name: {game.name} | Region: {game.region} | Year Released: {game.date_released}</span>
                <LinkButton 
                    url={"/add-game"}
                    btnContainerStyle={{display: 'inline'}} 
                    btnStyle={{background: '#2ed2e6', color: 'black', boxShadow: '0 0 13px 3px #2ed2e6', fontWeight: 'bold'}}
                    message='Update Game' 
                />
            </li>
        </>
    )

    return (
        <div className='platform'>
            <h2>{console}</h2>
            <div><LinkButton url="/add-game" message="Add Game" btnStyle={{animation: 'glimmer 4s infinite'}}></LinkButton></div>

            <h2>Games</h2>
            <ul>
                {gamesList}
            </ul>
        </div>
    )
}
