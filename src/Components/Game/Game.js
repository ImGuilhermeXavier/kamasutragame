import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameCards from './GameCards';
import GameChoseNumber from './GameChoseNumber';

const Game = () => {
    return (
        <section className='animeLeft'>
            <Routes>
                <Route path='/' element={<GameChoseNumber />} />
                <Route path='/cards/:id' element={<GameCards />} />
            </Routes>
        </section>
    );
};

export default Game;
