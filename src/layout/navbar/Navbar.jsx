import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss'



export default function Navbar() {

    const stopAnimation = (e) => {
        // How to get this working?
        // console.log(e.target.style.animationPlayState === 'paused')
        e.target.style.animationPlayState = 'paused'
    }
    
    
    return (
        <>
            <nav className='navbar'>
                <ul>
                    <div className='logo'>
                        <li onMouseEnter={(e) => stopAnimation(e)}><Link to="/">
                            <span className='navbar__faulty-letter-one'>H</span>om<span className='navbar__faulty-letter-two'>e</span>
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
