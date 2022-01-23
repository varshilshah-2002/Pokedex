import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index.jsx'
import Pokemon from './App.js';
function Start() {
  return <div>
      <BrowserRouter>
      <Routes>
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/pokedex" element={<Pokemon/>}/>
        </Routes>
      </BrowserRouter>
  </div>;
}

export default Start;
