import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Routing() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/projects" elements={<Pokemon/>}/>
        </Routes>
    );
}

export default Routing;