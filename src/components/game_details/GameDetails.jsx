import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './game-details.scss'

const API = process.env.REACT_APP_API_URL

// Will be a page. The url will not match the component heirarchy.
// Will recieve game details from whichever game for whichever console. 
// Will display it with even more info
// Will make a call to a video games API (probably wikipedia REST api)


export default function GameDetails({ id }) {
    const [game, setGame] = useState({})

    const getGame = async (id) => {
        try {

            await axios.get(`${API}/snesGames/${id}`)
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
            <div className='game-details__title'>Title: {game.title}</div>
            <div className='game-details__region'>Region: {game.region}</div>
            <div className='game-details__year'>Year Released: {game.year_released}</div>
            <div className='game-details__description'>Description: Awesome friggin game!</div>
            <div className='game-details__developer'>Developer: Konami</div>
            <div className='game-details__publisher'>Publisher: Konami</div>
            <div className='game-details__director'>Director: Nobuya Nakazato</div>
            <div className='game-details__producer'>Producer: Kazumi Kitaue</div>
            <div className='game-details__artist'>Artist: Nobuya Nakazato</div>
            <div className='game-details__composer'>Composer: Miki Higashino</div>
            <div className='game-details__genre'>Genre: Run and gun</div>
            <div className='game-details__platforms'>Platforms: Single-player, cooperative</div>
        </div>
    )
}
