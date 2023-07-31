import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Loading from '../loading/Loading';
import Game from '../game/Game';
import GameDetails from '../game_details/GameDetails';
import LinkButton from '../../layout/link_button/LinkButton';

import './platform.scss';

const API = process.env.REACT_APP_API_URL;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;


// When Platform mounts, take browser url (snes), make api call to back-end /url route in useEffect
// Then, display games list in component's <ul>



export default function Platform({ gameConsole }) {
    const [games, setGames] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const location = useLocation();
    const url = location.pathname.split("/")[location.pathname.split("/").length-1];

    function populateGames() {
        try {
            setLoading(true);

            axios.get(`${API}/${url}Games`)
            .then(res => {
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
        populateGames()
    }, []);


    const handleDelete = (id) => {

        axios.delete(`${API}/${url}Games/${id}`)
        .then(() => {
            console.log('deleted at index', id)
            // Is there a better way of doing this other than using populateGames() function to recall api or ?
            populateGames()
        }).catch(err => console.error(`Error deleting game at index ${id}:`, err))
    }

    const renderContent = () => {
        if (loading) {
            return <Loading />
        } else {
            return games.map((game) => 
                <Game game={game} key={game.id} handleDelete={handleDelete} />
            )
        }
    }



    return (
        <div className='platform'>
            <h2>{gameConsole}</h2>
            <div><LinkButton url="/add-game" message="Add Game" btnStyle={{animation: 'glimmer 4s infinite'}}></LinkButton></div>

            <h2>Games</h2>
            <ul>
                {renderContent()}
            </ul>
        </div>
    )
};
