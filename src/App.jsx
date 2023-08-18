import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import ChooseConsole from './components/choose_console/ChooseConsole';
import PC from './pages/pc/PC';
import Nintendo from './pages/nintendo/Nintendo';
import Sega from './pages/sega/Sega';
import AddGame from './pages/add_game/AddGame';
import EditGame from './pages/edit_game/EditGame';
import NotFound from './pages/not_found/NotFound';

import './App.scss';

export const UserContext = createContext();




function App() {

  const [user, setUser] = useState({});

  
  return (
    <div className="App">
          <UserContext.Provider value={{user, setUser}}>
          <Navbar />

          <main>
            {/* Our Route paths are succeeded by an asterisk because we have deeper nested Routes */}
            <Routes>
              <Route index element={<Home />} />
              <Route path="choose-console" element={<ChooseConsole />} />
              <Route path="pc/*" element={<PC />} />
              <Route path="nintendo/*" element={<Nintendo />} />
              <Route path="sega/*" element={<Sega />} />
              <Route path="add-game" element={<AddGame />} />
              <Route path="edit-game" element={<EditGame />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          </UserContext.Provider>
      </div>

  );
};

// export const useMyContext = () => {}

export default App;
