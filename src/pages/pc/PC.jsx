import React from 'react';

import Platform from '../../components/platform/Platform';


import './pc.scss';



export default function PC() {



    return (
        <div className='pc'>
            <h1>PC</h1>

            <Platform gameConsole={'PC'} gameConsoleUrl={'pc'} />
        </div>
    );
};
