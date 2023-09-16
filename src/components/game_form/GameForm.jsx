import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../App'


import './game-form.scss'

const API = process.env.REACT_APP_API_URL



export default function GameForm({ method, oldGame }) {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { platformId } = location.state
    const { user } = useContext(UserContext)

    const [game, setGame] = useState({
        platform_id: platformId,
        user_id: user.uid,
        title: '',
        region: 'ntsc-j',
        year_released: '',
        developer: '',
        publisher: '',
        director: '',
        producer: '',
        artist: '',
        composer: '',
        genre: '',
        mode: ''
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

            axios.post(`${API}games`, game)
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

        axios.put(`${API}games/${game.id}`, game)
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
                <select id="region" value={game.region || ''} onChange={handleChange} required>
                    <option value="ntsc-j">NTSC-J (Japan and Asia)</option>
                    <option value="ntsc-u">NTSC-U (North America, South America)</option>
                    <option value="pal">PAL (Europe, Oceania, Middle East, India, South Africa)</option>
                    <option value="ntsc-c">NTSC-C (China)</option>
                </select>

                <label htmlFor="year_released">Year Released:</label>
                <input type="text" placeholder='Year Released' id='year_released' value={game.year_released} onChange={handleChange} required />
                
                <label htmlFor="developer">Developer:</label>
                <input type="text" placeholder='Developer' id='developer' value={game.developer || ''} onChange={handleChange} />
                
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" placeholder='Publisher' id='publisher' value={game.publisher || ''} onChange={handleChange} />
                
                <label htmlFor="director">Director:</label>
                <input type="text" placeholder='Director' id='director' value={game.director || ''} onChange={handleChange} />
                
                <label htmlFor="producer">Producer:</label>
                <input type="text" placeholder='Producer' id='producer' value={game.producer || ''} onChange={handleChange} />
                
                <label htmlFor="artist">Artist:</label>
                <input type="text" placeholder='Artist' id='artist' value={game.artist || ''} onChange={handleChange} />
                
                <label htmlFor="composer">Composer:</label>
                <input type="text" placeholder='Composer' id='composer' value={game.composer || ''} onChange={handleChange} />
                
                <label htmlFor="genre">Genre:</label>
                <input type="text" placeholder='Genre' id='genre' value={game.genre || ''} onChange={handleChange} />
                
                <label htmlFor="mode">Mode:</label>
                <input type="text" placeholder='Mode' id='mode' value={game.mode || ''} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
