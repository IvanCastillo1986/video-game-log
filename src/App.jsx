import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './pages/home/Home';
import PC from './pages/pc/PC';
import Nintendo from './pages/nintendo/Nintendo';
import Sega from './pages/sega/Sega';
import NotFound from './pages/not_found/NotFound';

import './App.scss';



function App() {

  
  return (

    <div className="App">
      <Navbar />

      <main>
        {/* Our Route paths are succeeded by an asterisk because  */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="pc/*" element={<PC />} />
          <Route path="nintendo/*" element={<Nintendo />} />
          <Route path="sega/*" element={<Sega />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </div>

  );
}

export default App;
