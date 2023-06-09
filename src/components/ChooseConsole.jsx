import React from 'react'
import { Link } from 'react-router-dom'



export default function ChooseConsole({ consoleLinks }) {

        
    return (
        <div className='choose-console'>
            <h2>Which console would you like to choose?</h2>

            <div className='consoles'>
                <ul>
                    {consoleLinks.map(console => 
                        <Link to={console.url}>{console.name}</Link>
                    )}
                </ul>
            </div>
        </div>
    )
}
