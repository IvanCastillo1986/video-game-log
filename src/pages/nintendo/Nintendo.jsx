import React from 'react'
import { useLocation } from 'react-router-dom'

import Platform from '../../components/platform/Platform'

import './nintendo.scss'



export default function Nintendo() {

    const location = useLocation()


    return (
        <div className='nintendo'>
            <h1>Nintendo</h1>

            <Platform gameConsole={location.state.gameConsole} gameConsoleUrl={location.state.gameConsoleUrl} /> 

        </div>
    )
}










{/* OLD HANDLING OF COMPONENT RENDERS

            <Routes>
                <Route index 
                    element={
                    <ChooseConsole gameConsoleLinks={gameConsoleLinks} handleClick={handleClick} /> 
                    } 
                />
                
                <Route path={`${gameConsoleUrl}/*`} 
                    element={<Platform gameConsole={gameConsole} gameConsoleUrl={gameConsoleUrl}/>}
                />
            </Routes> 
*/}