import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'


import './game-form.scss'

const API = process.env.REACT_APP_API_URL



export default function GameForm({ method, oldGame }) {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { platformId } = location.state

    const [game, setGame] = useState({
        title: '',
        region: 'ntsc-j',
        year_released: '',
        platform_id: platformId,
    })

    useEffect(() => {
        // sets game to passed {game} prop from <Platform /> if Updating
        if (oldGame) {
            setGame(oldGame)
        }
    }, [oldGame]);

    function handleChange(e) {
        const {id, value} = e.target
        setGame({...game, [id]: value})
    }


    function addGame(e) {
        e.preventDefault()

        try {

            axios.post(`${API}/games`, game)
            .then(() => {
                setGame({
                    title: '',
                    region: 'ntsc-j',
                    year_released: '',
                    platform_id: null,
                })
                navigate(-1)
            }).catch(err => {
                console.log(`Error in GameForm addGame()`, err)
            })

        } catch (err) {
            console.log('Error adding game:', err)
        }
    }

    function editGame(e) {
        e.preventDefault()

        axios.put(`${API}/games/${game.id}`, game)
        .then(() => {
            navigate(-1)
        }).catch(err => {
            console.log(`Error in GameForm editGame()`, err)
        })
    }
    


    return (
        <>
            <form className='game-form' onSubmit={method === 'post' ? addGame : editGame}>
                <label htmlFor="title">Title:</label>
                <input type="text" placeholder='Title' id='title' value={game.title} onChange={handleChange} required />
                
                <label htmlFor="region">Region:</label>
                <select id="region" value={game.region} onChange={handleChange} required>
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
