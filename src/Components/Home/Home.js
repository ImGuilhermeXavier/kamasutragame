import React from 'react';
import logo from '../../Static/Logos/ks-logo.png';

import positions from '../../Static/Positions/ks-position-32.svg';
import statistic from '../../Static/Icons/statistic.svg';
import joystick from '../../Static/Icons/joystick.svg';

import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className={`${styles.home} animeLeft`}>
            <div className={styles.logo}>
                <img src={logo} alt='Kama Sutra Logo' />
            </div>
            <nav className={styles.nav}>
                <Link to='/positions' className={styles.button}>
                    <img
                        src={positions}
                        alt='Posições'
                        className={styles.icon}
                    />
                    {/* <span className={styles.name}>Posições</span> */}
                </Link>
                <Link to='/game' className={styles.button}>
                    <img
                        src={joystick}
                        alt='Joystick'
                        className={styles.icon}
                    />
                    {/* <span className={styles.name}>Jogar</span> */}
                </Link>
                <Link to='/statistics' className={styles.button}>
                    <img
                        src={statistic}
                        alt='Statistics'
                        className={styles.icon}
                    />
                    {/* <span className={styles.name}>Estatísticas</span> */}
                </Link>
            </nav>
        </section>
    );
};

export default Home;
