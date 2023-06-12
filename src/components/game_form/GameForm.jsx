import React, { useState } from 'react'

import { snesGames } from '../../models/snesGames'

import './game-form.scss'



export default function GameForm() {

    const [game, setGame] = useState({
        title: '',
        region: '',
        year_released: '',
    })

    function handleChange(e) {
        const {id, value} = e.target
        setGame({...game, [id]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        snesGames.push(game)
        console.log(snesGames)
    }



    return (
        <>
            <form className='game-form' onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder='Title' id='title' value={game.title} onChange={handleChange} required />
                
                <label htmlFor="region">Region:</label>
                <select id="region" value={game.region} onChange={handleChange}>
                    <option value="ntsc-j">NTSC-J (Japan and Asia)</option>
                    <option value="ntsc-u">NTSC-U (North America, South America)</option>
                    <option value="pal">PAL (Europe, Oceania, Middle East, India, South Africa)</option>
                    <option value="ntsc-c">NTSC-C (China)</option>
                </select>

                <label htmlFor="year_released">Year Released:</label>
                <input type="text" placeholder='Year Released' id='year_released' value={game.year} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
