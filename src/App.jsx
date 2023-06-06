import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './pages/home/Home';
import Log from './pages/log/Log';
import NotFound from './pages/not_found/NotFound';

import './App.scss';



function App() {

  
  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log" element={<Log />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>

  );
}

export default App;
