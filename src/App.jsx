import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';

import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/Home';
import ChooseConsole from './pages/choose_console/ChooseConsole';
import PC from './pages/pc/PC';
import Nintendo from './pages/nintendo/Nintendo';
import Sega from './pages/sega/Sega';
import AddGame from './pages/add_game/AddGame';
import EditGame from './pages/edit_game/EditGame';
import NotFound from './pages/not_found/NotFound';
import UserMustSignIn from './pages/user_must_sign_in/UserMustSignIn';
import PrivateRoutes from './components/PrivateRoutes';

import './App.scss';



function App() {

  
  return (
    <AuthProvider>
      <div className="App">

        <Navbar />

        <main>
          {/* Our Route paths are succeeded by an asterisk because we have deeper nested Routes */}
          <Routes>
            <Route index element={<Home />} />
            
            <Route element={<PrivateRoutes />}>
              <Route path="choose-console" element={<ChooseConsole />} />
              <Route path="pc/*" element={<PC />} />
              <Route path="nintendo/*" element={<Nintendo />} />
              <Route path="sega/*" element={<Sega />} />
              <Route path="add-game" element={<AddGame />} />
              <Route path="edit-game" element={<EditGame />} />
            </Route>

            <Route path="not-signed-in" element={<UserMustSignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </AuthProvider>
  );
};


export default App;
