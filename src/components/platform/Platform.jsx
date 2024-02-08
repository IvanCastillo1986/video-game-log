import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { convertPlatformToId } from '../../helper/convertPlatformToId.js'
import { UserContext } from '../auth/AuthProvider.jsx';

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
    const user = useContext(UserContext);
    
    
    function populateGames() {
        try {
            if (gameConsole) {

                axios.get(`${API}/games?platformId=${platformId}&uuid=${user.uid}`) // /games?platformId=3
                .then(res => {
                    setGames(res.data);
                    setLoading(false);
                }).catch(err => {
                    console.error(`Error in video game log REACT APP ${err.message}`);
                })

            } else {
                axios.get(`${API}/games?uuid=${user.uid}`)
                .then(res => {
                    console.log(res);
                    setGames(res.data);
                    setLoading(false);
                })
                .catch(err => console.log(`Error in REACT APP getting all user's games: ${err}`));
            }
        } catch(err) {
            setLoading(false);
            console.log(`<Platform /> useEffect error: ${err.message}`);
        }
    };

    useEffect(() => {
        setLoading(true);
        if (user) {
            populateGames();
        }
    }, [user]);


    const handleDelete = (id) => {

        axios.delete(`${API}/games/${id}`)
        .then(() => {
            // Is there a better way of doing this other than using populateGames() function to recall api or ?
            populateGames();
        }).catch(err => console.error(`Error deleting game at with user id ${id}:`, err.message));
    };

    const renderContent = () => {
        if (loading) {
            return <Loading />;
        } else {
            if (games.length) {
                // if user has games for this console

                return (
                    <>
                        <h2>Games</h2>
                        <ul>
                            {games.map((game) => <Game game={game} key={game.id} handleDelete={handleDelete} />)}
                        </ul>
                    </>
                );
                
            } else {
                // if user has NO games for this console
                
                if (user.email) { // if the condition is 'user' instead, it renders if instead of else
                    return(
                        <p>
                            You currently have no games for this console. <br />
                            Add some and start tracking your collection!
                        </p>
                    );
                } else {
                    return <p>Loading...</p>
                }
            }
        }
    };

    console.log(gameConsole)

    return (
        <div className='platform'>

            {gameConsole &&
                <>
                <h2>{gameConsole !== 'PC' && gameConsole}</h2>

                    <LinkButton 
                        url="/add-game" message="Add Game" 
                        btnStyle={{animation: 'glimmer 4s infinite'}} 
                        platformId={platformId}
                    />
                </>
            }

            {renderContent()}

        </div>
    );
};
