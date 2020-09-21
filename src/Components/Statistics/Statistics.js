import React from 'react';
import Header from '../Header';
import statistic from '../../Static/Icons/statistic.svg';

const Statistics = () => {
    return (
        <section className='animeLeft'>
            <Header
                complete='true'
                title='Estatísticas'
                linkPrev='/home'
                image={statistic}
            />
            Esta é as estatisticas
        </section>
    );
};

export default Statistics;
