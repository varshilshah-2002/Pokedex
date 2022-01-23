import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index.jsx'
import Pokemon from './App.js';
import Footer from './components/Footer.js'
function Start() {
  return <div>
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/F" element={<Footer/>} />
            <Route exact path="/pokedex" elements={<Pokemon/>}/>
        </Routes>
      </BrowserRouter>
  </div>;
}

export default Start;
