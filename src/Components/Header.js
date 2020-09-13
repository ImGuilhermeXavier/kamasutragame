import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PrevIcon } from '../Static/Icons/next.svg';
import smallLogo from '../Static/Logos/ks-logo-sm.png';

import styles from './Header.module.scss';

const Header = ({ hidePrev }) => {
    return (
        <header className={styles.header}>
            {!hidePrev && (
                <Link className={styles.prevBtn} to='/home'>
                    <PrevIcon />
                </Link>
            )}
            <Link to='/home'>
                <img src={smallLogo} alt='small Logo' />
            </Link>
        </header>
    );
};

export default Header;
