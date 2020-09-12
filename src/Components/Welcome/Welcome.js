import React from 'react';
import Button from '../Forms/Button';

import logo from '../../Static/Logos/ks-logo.png';
import styles from './Welcome.module.scss';

function Welcome() {
    return (
        <>
            <div className={styles.App}>
                <img className={styles.logo} src={logo} alt='Kama Sutra Logo' />
                <Button>Começar</Button>
            </div>
            <footer className={styles.footer}>
                Alguns direitos reservados.
            </footer>
        </>
    );
}

export default Welcome;
