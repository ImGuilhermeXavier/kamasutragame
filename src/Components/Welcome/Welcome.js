import React from 'react';
import Button from '../Forms/Button';

import logo from '../../Static/Logos/ks-logo.png';
import styles from './Welcome.module.scss';
import { useNavigate } from 'react-router-dom';
import Head from '../Head/Head';
import About from '../About/About';

function Welcome() {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (localStorage.getItem('finishOnboarding')) navigate('/home');
    }, [navigate]);

    return (
        <>
            <Head
                title='Jogue o Kama Sutra Game e complete todas posições'
                description='As melhores posições para casais no jogo Kama Sutra'
            />
            <div className={styles.App}>
                <img className={styles.logo} src={logo} alt='Kama Sutra Logo' />
                <h3 className={styles.info}>
                    Jogue o{' '}
                    <a href='#whats-is' className={styles.link}>
                        Kama Sutra
                    </a>{' '}
                    com mais de 35 posições para Casais
                </h3>
                <Button link='true' to='tour'>
                    Começar
                </Button>
            </div>
            <About />
            <footer className={styles.footer}>
                Todos os direitos reservados.
            </footer>
        </>
    );
}

export default Welcome;
