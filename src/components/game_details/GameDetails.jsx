import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './game-details.scss'

const API = process.env.REACT_APP_API_URL

// A component to be toggled in <Game />.
// Will recieve game details from whichever game for whichever console. 
// Will display it with even more info
// Will make a call to a video games API (probably wikipedia REST api)


export default function GameDetails({ id }) {
    const [game, setGame] = useState({})

    const getGame = async (id) => {
        try {
            await axios.get(`${API}/games/${id}`)
                .then(res => {
                    setGame(res.data)
                })
        } catch(err) {
            console.log('Error in <GameDetails />:', err)
        }
    }

    useEffect(() => {
        getGame(id)
    }, []);


    return (
        <div className='game-details'>
            <div className='game-details__summary'>Summary: {game.summary || 'N/A'}</div>
            <div className='game-details__developer'>Developer: {game.developer || 'N/A'}</div>
            <div className='game-details__publisher'>Publisher: {game.publisher || 'N/A'}</div>
            <div className='game-details__director'>Director: {game.developer || 'N/A'}</div>
            <div className='game-details__producer'>Producer: {game.producer || 'N/A'}</div>
            <div className='game-details__artist'>Artist: {game.artist || 'N/A'}</div>
            <div className='game-details__composer'>Composer: {game.composer || 'N/A'}</div>
            <div className='game-details__genre'>Genre: {game.genre || 'N/A'}</div>
            <div className='game-details__mode'>Mode: {game.mode || 'N/A'}</div>
        </div>
    )
}
