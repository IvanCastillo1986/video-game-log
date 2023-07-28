import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './game-form.scss'

const API = process.env.REACT_APP_API_URL



export default function GameForm({ method, idx }) {

    const navigate = useNavigate()

    const [game, setGame] = useState({
        title: '',
        region: 'ntsc-j',
        year_released: '',
    })

    function handleChange(e) {
        const {id, value} = e.target
        setGame({...game, [id]: value})
    }


    function addGame(e) {
        e.preventDefault()

        const newGame = game

        axios.post(`${API}/snesGames`, newGame)
        .then(res => {
            navigate("/nintendo/snes")
        })
    }

    function editGame(e) {
        e.preventDefault()

        const updatedGame = game
        axios.put(`${API}/snesGames/${idx}`, updatedGame)
        .then(res => {
            navigate("/nintendo/snes")
        })
    }
    



    return (
        <>
            <form className='game-form' onSubmit={method === 'post' ? addGame : editGame}>
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
                <input type="text" placeholder='Year Released' id='year_released' value={game.year_released} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
