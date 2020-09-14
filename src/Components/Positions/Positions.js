import React from 'react';
import Header from '../Header';

import steps from '../../positions';

const Positions = () => {
    console.log(steps);
    return (
        <section className='animeLeft'>
            <Header />
            Estas sao as posiçoes
        </section>
    );
};

export default Positions;
