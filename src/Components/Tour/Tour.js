import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TourStep from './TourStep';

function Tour() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<TourStep number='1' />} />
                <Route path='/step-2' element={<TourStep number='2' />} />
                <Route path='/step-3' element={<TourStep number='3' />} />
                <Route path='/step-4' element={<TourStep number='4' />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default Tour;
