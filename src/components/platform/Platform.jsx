import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { convertPlatformToId } from '../../helper/convertPlatformToId.js'
import { UserContext } from '../../App.jsx';

import Loading from '../loading/Loading';
import Game from '../game/Game';
import LinkButton from '../../layout/link_button/LinkButton';



import './platform.scss';

const API = process.env.REACT_APP_API_URL;


// When Platform mounts, take browser url (snes), make api call to back-end /url route in useEffect
// Then, display games list in component's <ul>


export default function Platform({ gameConsole, gameConsoleUrl }) {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    const platformId = convertPlatformToId(gameConsoleUrl);
    const { user } = useContext(UserContext)
    
    function populateGames() {
        try {
            setLoading(true);

            axios.get(`${API}/games?platformId=${platformId}&uuid=${user.uid}`) // /games?platformId=3
            .then(res => {
                console.log(res.data)
                setGames(res.data);
                setLoading(false);
            }).catch(err => {
                console.error(`Error in video game log REACT APP ${err}`);
            })
        } catch(err) {
            setLoading(false);
            console.log(`<Platform /> useEffect error: ${err.message}`);
        }
    }

    useEffect(() => {
        populateGames();
    }, []);


    const handleDelete = (id) => {

        axios.delete(`${API}/games/${id}`)
        .then(() => {
            // Is there a better way of doing this other than using populateGames() function to recall api or ?
            populateGames()
        }).catch(err => console.error(`Error deleting game at with user id ${id}:`, err))
    }

    const renderContent = () => {
        if (loading) {
            return <Loading />
        } else {
            if (games.length) {
                return games.map((game) => 
                   <Game game={game} key={game.id} handleDelete={handleDelete} />
                )
            }
        }
    }



    return (
        <div className='platform'>
            <h2>{gameConsole}</h2>
            
            <LinkButton 
                url="/add-game" message="Add Game" 
                btnStyle={{animation: 'glimmer 4s infinite'}} 
                platformId={platformId}
            />
            {
            games.length ?
            <>
                <h2>Games</h2>
                <ul>
                    {games &&
                    renderContent()
                    }
                </ul>
            </>
                :
            <>
                <p style={{marginTop: '80px'}}>You have no games for this console.</p>
                <p>But no worries, you can always start collecting some!</p>
                <p>Reminder: &nbsp; Be sure to add new games once you get them.</p>
            </>
            }
        </div>
    )
};
