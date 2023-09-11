import React, { useState } from 'react';

import GameDetails from '../game_details/GameDetails';
import LinkButton from '../../layout/link_button/LinkButton';
import { FaTrashCan } from "react-icons/fa6";

import './game.scss'


export default function Game({ game, handleDelete }) {

    const [showInfo, setShowInfo] = useState(false);

    const handleShowInfo = (e) => {
        setShowInfo(!showInfo)
    }


    return (
        <li className='game'>
            <div className='game__game-wrapper'>
                <div className='game__game-info'>
                    Title: {game.title} | Region: {game.region} | Year Released: {game.year_released}
                </div>
                
                <LinkButton 
                    btnClick={handleShowInfo}
                    url=''
                    btnContainerStyle={{display: 'inline', gridColumnStart: '8', gridColumnEnd: '10'}}
                    btnStyle={{fontWeight: 'bold'}}
                    message='Show Info'
                />
                
                <LinkButton 
                    game={game}
                    url={"/edit-game"}
                    btnContainerStyle={{display: 'inline', gridColumnStart: '10', gridColumnEnd: '12'}} 
                    btnStyle={{background: '#2ed2e6', color: 'black', boxShadow: '0 0 13px 3px #2ed2e6', fontWeight: 'bold'}}
                    message='Edit Game' 
                />
                <div className='game__trash-container' >
                    <FaTrashCan className='game__trash-icon' size={'2.8em'} onClick={() => handleDelete(game.id)}/>
                </div>
            </div>
            { showInfo && <GameDetails id={game.id} /> }
        </li>
    )
}
