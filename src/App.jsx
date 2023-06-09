import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import PC from './pages/pc/PC';
import Nintendo from './pages/nintendo/Nintendo';
import Sega from './pages/sega/Sega';
import AddGame from './pages/add_game/AddGame';
import NotFound from './pages/not_found/NotFound';

import './App.scss';



function App() {

  
  return (

    <div className="App">
      <Navbar />

      <main>
        {/* Our Route paths are succeeded by an asterisk because we have deeper nested Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="pc/*" element={<PC />} />
          <Route path="nintendo/*" element={<Nintendo />} />
          <Route path="sega/*" element={<Sega />} />
          <Route path="add-game" element={<AddGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>

  );
}

export default App;
