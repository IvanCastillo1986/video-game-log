import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Loading from '../loading/Loading';
import LinkButton from '../../layout/link_button/LinkButton';

import './platform.scss';

const API = process.env.REACT_APP_API_URL;


// When Platform mounts, take browser url (snes), make api call to back-end /url route in useEffect
// Then, display games list in component's <ul>

export default function Platform({ gameConsole }) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const url = location.pathname.split("/")[location.pathname.split("/").length-1];


    useEffect(() => {
        try {
            setLoading(true);

            axios.get(`${API}/${url}Games`)
            .then(res => {
                console.log(res)
                setGames(res.data.snesGamesArray);
                setLoading(false);
            }).catch(err => {
                console.error(`Error in video game log REACT APP ${err}`);
            })
        } catch(err) {
            setLoading(false);
            console.log(`<Platform /> useEffect error: ${err.message}`);
        }

    }, [])

    const renderContent = () => {
        if (loading) {
            return <Loading />
        } else {
            return games.map(game => 
                <li className='platform__game' key={game.name}>
                    <span>Name: {game.name} | Region: {game.region} | Year Released: {game.date_released}</span>
                     <LinkButton 
                        url={"/add-game"}
                        btnContainerStyle={{display: 'inline'}} 
                        btnStyle={{background: '#2ed2e6', color: 'black', boxShadow: '0 0 13px 3px #2ed2e6', fontWeight: 'bold'}}
                        message='Update Game' 
                    />
                </li>
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
                {/* {games &&
                games.map(game => 
                        <li className='platform__game' key={game.name}>
                            <span>Name: {game.name} | Region: {game.region} | Year Released: {game.date_released}</span>
                             <LinkButton 
                                url={"/add-game"}
                                btnContainerStyle={{display: 'inline'}} 
                                btnStyle={{background: '#2ed2e6', color: 'black', boxShadow: '0 0 13px 3px #2ed2e6', fontWeight: 'bold'}}
                                message='Update Game' 
                            />
                        </li>
                    )
                } */}
            </ul>
        </div>
    )
};
