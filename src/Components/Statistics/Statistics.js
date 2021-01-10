import React from 'react';
import Header from '../Header';
import statistic from '../../Static/Icons/statistic.svg';
import { UserContext } from '../../UserContext';

import styles from './Statistics.module.scss';
import Head from '../Head/Head';
import About from '../About/About';

const Statistics = () => {
    const { getAllPositions } = React.useContext(UserContext);

    function getDonePositions() {
        return getAllPositions().filter((position) => position.done).length;
    }

    function getRemainingPositions() {
        return getAllPositions().filter((position) => !position.done).length;
    }

    return (
        <>
            <section className={`animeLeft ${styles.statistics}`}>
                <Head title='Estatísticas' />
                <Header
                    complete='true'
                    title='Estatísticas'
                    linkPrev='/home'
                    image={statistic}
                />
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div>Feitas</div>
                        <div>{getDonePositions()}</div>
                    </div>
                    <div className={styles.card}>
                        <div>Restantes</div>
                        <div>{getRemainingPositions()}</div>
                    </div>
                    <div className={styles.card}>
                        <div>Total</div>
                        <div>{getAllPositions().length}</div>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
};

export default Statistics;
