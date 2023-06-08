import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss'



export default function Navbar() {


    
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <div className='logo'>
                        <li><Link to="/">
                            <span className='navbar__faulty-letter-one'>H</span>o<span className='navbar__faulty-letter-two'>m</span>e
                        </Link></li>
                    </div>
                    <div className='navbar__links'>
                        <li><Link to="pc">PC</Link></li>
                        <li><Link to="nintendo">Nintendo</Link></li>
                        <li><Link to="sega">Sega</Link></li>
                    </div>
                </ul>

                <div className='navbar__sun' />
            </nav>
        </>
    );
};
