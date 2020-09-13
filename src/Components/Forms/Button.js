import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

export default function Button({ children, link, ...props }) {
    return link ? (
        <Link className={styles.button} {...props}>
            {children}
        </Link>
    ) : (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
}
