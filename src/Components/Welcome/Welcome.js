import React from 'react';
import Button from '../Forms/Button';

import logo from '../../Static/Logos/ks-logo.png';
import styles from './Welcome.module.scss';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();

    React.useEffect(() => {
        console.log();
        if (localStorage.getItem('finishOnboarding')) {
            navigate('/home');
        }
    }, [navigate]);

    return (
        <>
            <div className={styles.App}>
                <img className={styles.logo} src={logo} alt='Kama Sutra Logo' />
                <Button link='true' to='tour'>
                    Começar
                </Button>
            </div>
            <footer className={styles.footer}>
                Alguns direitos reservados.
            </footer>
        </>
    );
}

export default Welcome;
