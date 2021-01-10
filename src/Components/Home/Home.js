import React from 'react';
import logo from '../../Static/Logos/ks-logo.png';

import positions from '../../Static/Positions/ks-position-32.svg';
import statistic from '../../Static/Icons/statistic.svg';
import joystick from '../../Static/Icons/joystick.svg';

import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import About from '../About/About';

const Home = () => {
    return (
        <>
            <section className={`${styles.home} animeLeft`}>
                <Head title='Home' />
                <div className={styles.logo}>
                    <img src={logo} alt='Kama Sutra Logo' />
                    <h1 className={styles.info}>
                        Jogue o{' '}
                        <a href='#whats-is' className={styles.link}>
                            Kama Sutra
                        </a>{' '}
                        com mais de 35 posições para Casais
                    </h1>
                </div>

                <nav className={styles.nav}>
                    <Link to='/positions' className={styles.button}>
                        <div className={styles.img}>
                            <img
                                src={positions}
                                alt='Posições'
                                className={styles.icon}
                            />
                        </div>
                        <span className={styles.name}>Posições</span>
                    </Link>
                    <Link to='/jogo' className={styles.button}>
                        <div className={styles.img}>
                            <img
                                src={joystick}
                                alt='Joystick'
                                className={styles.iconGame}
                            />
                        </div>
                        <span className={styles.name}>Jogar</span>
                    </Link>
                    <Link to='/estatisticas' className={styles.button}>
                        <div className={styles.img}>
                            <img
                                src={statistic}
                                alt='Estatísticas'
                                className={styles.iconEst}
                            />
                        </div>
                        <span className={styles.name}>Estatísticas</span>
                    </Link>
                </nav>
            </section>
            <About />
        </>
    );
};

export default Home;
