import React from 'react';
import Header from '../Header';

import styles from './Positions.module.scss';
import steps from '../../positions';

import positions from '../../Static/Icons/positions.svg';

const Positions = () => {
    console.log(steps);
    return (
        <section className='animeLeft'>
            <Header
                complete='true'
                title='Positions'
                image={positions}
                subtitle='Total: 54 posições'
            />
            <div className={styles.content}>
                <div className={styles.firstColumn}>
                    {steps.map(
                        (step) =>
                            steps.indexOf(step) <= steps.length / 2 && (
                                <div key={step.image} className={styles.card}>
                                    {/* <img
                            className={styles.img}
                            src={step.image}
                            alt={step.title}
                        /> */}
                                </div>
                            ),
                    )}
                </div>
                <div className={styles.secondColumn}>
                    {steps.map(
                        (step) =>
                            steps.indexOf(step) > steps.length / 2 && (
                                <div key={step.image} className={styles.card}>
                                    {/* <img
                            className={styles.img}
                            src={step.image}
                            alt={step.title}
                        /> */}
                                </div>
                            ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default Positions;
