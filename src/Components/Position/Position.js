import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Header from '../Header';

import styles from './Position.module.scss';

const Position = () => {
    const { id } = useParams();
    const { getAllPositions } = React.useContext(UserContext);

    const [step] = getAllPositions().filter((step) => step.id === +id);
    return (
        <section className={styles.position}>
            <Header linkPrev={`/positions/${id}`} />
            <div className={styles.imgContent}>
                <img className={styles.img} src={step.image} alt={step.title} />
            </div>
            <div className={styles.card}>
                <h1 className={styles.title}>{step.title}</h1>
                <span className={styles.description}>{step.description}</span>
            </div>
        </section>
    );
};

export default Position;
