import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Game from './Components/Game/Game';
import Home from './Components/Home/Home';
import Positions from './Components/Positions/Positions';
import Statistics from './Components/Statistics/Statistics';
import Tour from './Components/Tour/Tour';
import Welcome from './Components/Welcome/Welcome';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='home' element={<Home />} />
                <Route path='tour/*' element={<Tour />} />
                <Route path='game/*' element={<Game />} />
                <Route path='positions' element={<Positions />} />
                <Route path='statistics' element={<Statistics />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
