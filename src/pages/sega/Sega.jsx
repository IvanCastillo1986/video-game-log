import React from 'react';
import { useLocation } from 'react-router-dom';

import Platform from '../../components/platform/Platform';

import './sega.scss';



export default function Sega() {

    const location = useLocation()

    return (
        <div className='sega'>
            <h1>Sega</h1>

            <Platform gameConsole={location.state.gameConsole} gameConsoleUrl={location.state.gameConsoleUrl} />
        </div>
    );
};
