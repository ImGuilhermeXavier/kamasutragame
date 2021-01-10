import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameCards from './GameCards';
import GameChoseNumber from './GameChoseNumber';
import GameFinish from './GameFinish';

const Game = () => {
    return (
        <section className='animeLeft'>
            <Routes>
                <Route path='/' element={<GameChoseNumber />} />
                <Route path='cartas' element={<GameCards />} />
                <Route path='final' element={<GameFinish />} />
            </Routes>
        </section>
    );
};

export default Game;
