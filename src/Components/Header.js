import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PrevIcon } from '../Static/Icons/next.svg';
import smallLogo from '../Static/Logos/ks-logo-sm.png';

import styles from './Header.module.scss';

const Header = ({ hidePrev, complete, title, subtitle = '', image }) => {
    return (
        <header className={`${complete && styles.headerComplete}`}>
            <div className={styles.header}>
                {!hidePrev && (
                    <Link className={styles.prevBtn} to='/home'>
                        <PrevIcon />
                    </Link>
                )}
                <Link to='/home'>
                    <img src={smallLogo} alt='small Logo' />
                </Link>
            </div>
            {complete && (
                <div className={styles.headerPages}>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>{title}</h1>
                        <h2 className={styles.subtitle}>{subtitle}</h2>
                    </div>
                    <div className={styles.img}>
                        <img src={image} alt='position example' />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
