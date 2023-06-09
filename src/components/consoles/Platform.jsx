import React from 'react'



export default function Platform({ console, games }) {
    

    const gamesList = games.map(game => 
        <li>Name: {game.name} | Region: {game.region} | Year Released: {game.date_released}</li>
    )

    return (
        <div className='platform'>
            <h2>{console}</h2>

            <p>Games</p>
            <ul>
                {gamesList}
            </ul>
        </div>
    )
}
