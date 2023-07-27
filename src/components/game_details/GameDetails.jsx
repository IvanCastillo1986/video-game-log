import React from 'react'

import './game-details.scss'


// Will be a page. The url will not match the component heirarchy.
// Will recieve game details from whichever game for whichever console. 
// Will display it with even more info
// Will make a call to a video games API (probably wikipedia REST api)
// Ex:  nintendo/snes/contra3


export default function GameDetails({ gameTitle }) {




    return (
        <div className='game-details'>
            <div className='game-details__title'>Contra 3</div>
            <div className='game-details__description'>Awesome friggin game!</div>
            <div className='game-details__developer'>Konami</div>
            <div className='game-details__publisher'>Konami</div>
            <div className='game-details__director'>Nobuya Nakazato</div>
            <div className='game-details__producer'>Kazumi Kitaue</div>
            <div className='game-details__artist'>Nobuya Nakazato</div>
            <div className='game-details__composer'>Miki Higashino</div>
            <div className='game-details__genre'>Run and gun</div>
            <div className='game-details__platforms'>Single-player, cooperative</div>
        </div>
    )
}
