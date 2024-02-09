import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../components/auth/AuthProvider';

import './navbar.scss';



export default function Navbar() {
    
    const user = useContext(UserContext);

    const routeToPath = (url) => {
        if (url) return url;
        
        return "choose-console";
    };


    return (
        <>
            <nav className='navbar'>
                <ul>
                    <div className='logo'>
                        <li><Link to="/"> 
                            <span className='navbar__faulty-letter-one'>H</span>om<span className='navbar__faulty-letter-two'>e</span>
                        </Link></li>
                    </div>
                    

                    <div className='navbar__links'>
                        <li><Link to={routeToPath("pc")}>PC</Link></li>
                        <li><Link to={routeToPath()} state={{company: 'nintendo'}}>Nintendo</Link></li>
                        <li><Link to={routeToPath()} state={{company: 'sega'}}>Sega</Link></li>
                        <li><Link to={routeToPath("all-games")}>All</Link></li>
                    </div>
                </ul>

                <div >
                    <div className='navbar__sun' />
                </div>

                <li className='navbar__email'>{user?.email}</li>
            </nav>
        </>
    );
};
