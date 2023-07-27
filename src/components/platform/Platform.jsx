import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import Loading from '../loading/Loading';
import GameDetails from '../game_details/GameDetails';
import LinkButton from '../../layout/link_button/LinkButton';

import './platform.scss';

const API = process.env.REACT_APP_API_URL;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;


// When Platform mounts, take browser url (snes), make api call to back-end /url route in useEffect
// Then, display games list in component's <ul>

// Link button to take user to this console's gameDetails component

export default function Platform({ gameConsole }) {
    const [games, setGames] = useState([]);
    const [showInfo, setShowInfo] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const location = useLocation();
    const url = location.pathname.split("/")[location.pathname.split("/").length-1];
    console.log(REACT_APP_API_KEY)

    useEffect(() => {
        try {
            setLoading(true);

            axios.get(`${API}/${url}Games`)
            // axios.get(`https://api.mobygames.com/v1/games?api_key=moby_cXlw0A6wrJ8RoXWlWK0eKFRucbp`)
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

        // try {
        //     console.log('Game app api call')
        //     axios.get(`https://api.mobygames.com/v1/games?api_key=${REACT_APP_API_KEY}`)
        //     .then(res => console.log(res))
        // } catch(err) {
        //     console.log(`Game api call failed failed: ${err}`)
        // }

    }, [])

    const handleShowInfo = (e) => {
        setShowInfo(!showInfo)
    }

    const renderContent = () => {
        if (loading) {
            return <Loading />
        } else {
            return games.map(game => 
                <div className='platform__game-wrapper'>
                    <li className='platform__game' key={game.name}>
                    
                        <div className='platform__game-info'>
                                Title: {game.name} | Region: {game.region} | Year Released: {game.date_released}
                        </div>
                        
                        <LinkButton 
                            handleShowInfo={handleShowInfo}
                            url=''
                            btnContainerStyle={{display: 'inline', gridColumnStart: '4'}}
                            btnStyle={{background: '#f9700e', color: 'black', boxShadow: '0 0 13px 3px #f9700e,', fontWeight: 'bold'}}
                            message='Show Info' 
                        />
                        
                        <LinkButton 
                            url={"/add-game"}
                            btnContainerStyle={{display: 'inline', gridColumnStart: '5'}} 
                            btnStyle={{background: '#2ed2e6', color: 'black', boxShadow: '0 0 13px 3px #2ed2e6', fontWeight: 'bold'}}
                            message='Update Game' 
                        />
                    </li>
                    {showInfo && <GameDetails />}
                </div>
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
