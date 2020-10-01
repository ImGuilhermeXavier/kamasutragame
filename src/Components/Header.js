import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PrevIcon } from '../Static/Icons/next.svg';
import smallLogo from '../Static/Logos/ks-logo-sm.png';

import styles from './Header.module.scss';

const Header = ({
    hidePrev,
    linkPrev = '/home',
    complete,
    title,
    subtitle = '',
}) => {
    return (
        <header
            className={`${
                complete ? styles.headerComplete : styles.headerSimple
            }`}
        >
            <div
                className={`${styles.header}  ${
                    hidePrev && styles.headerCenter
                }`}
            >
                {!hidePrev && (
                    <Link className={styles.prevBtn} to={linkPrev}>
                        <PrevIcon />
                    </Link>
                )}
                <Link to='/home'>
                    <img src={smallLogo} alt='small Logo' />
                </Link>
            </div>
            {complete && (
                <div className={styles.headerPages}>
                    <h1 className={styles.title}>{title}</h1>
                    <h2 className={styles.subtitle}>{subtitle}</h2>
                </div>
            )}
        </header>
    );
};

export default Header;
