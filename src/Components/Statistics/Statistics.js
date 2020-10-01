import React from 'react';
import Header from '../Header';
import statistic from '../../Static/Icons/statistic.svg';

import styles from './Statistics.module.scss';

const Statistics = () => {
    return (
        <section className={`animeLeft ${styles.statistics}`}>
            <Header
                complete='true'
                title='Estatísticas'
                linkPrev='/home'
                image={statistic}
            />
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div>Feitas</div>
                    <div>25</div>
                </div>
                <div className={styles.card}>
                    <div>Restantes</div>
                    <div>55</div>
                </div>
                <div className={styles.card}>
                    <div>Total</div>
                    <div>35</div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
