import React from 'react';
import Header from '../Header';

import styles from './Positions.module.scss';
import steps from '../../positions';

import positions from '../../Static/Icons/positions.svg';
import { Link, useParams } from 'react-router-dom';

function scrollToElement(id) {
    window.scrollTo(
        0,
        document.getElementById(`step-${id}`).getBoundingClientRect().top -
            window.innerHeight / 2 +
            document.getElementById(`step-${id}`).offsetHeight,
    );
}

const Positions = () => {
    const { id } = useParams();

    React.useEffect(() => {
        if (id) {
            scrollToElement(id);
        }
    }, [id]);

    return (
        <section className='animeLeft'>
            <Header
                complete='true'
                title='Positions'
                linkPrev='/home'
                image={positions}
                subtitle='Total: 54 posições'
            />
            <div className={styles.content}>
                <ul className={styles.firstColumn}>
                    {steps.map(
                        (step) =>
                            steps.indexOf(step) <= steps.length / 2 && (
                                <Link
                                    to={`/position/${step.id}`}
                                    key={step.id}
                                    id={`step-${step.id}`}
                                    className={styles.card}
                                >
                                    <img
                                        className={styles.img}
                                        src={step.image}
                                        alt={step.title}
                                    />
                                </Link>
                            ),
                    )}
                </ul>
                <ul className={styles.secondColumn}>
                    {steps.map(
                        (step) =>
                            steps.indexOf(step) > steps.length / 2 && (
                                <Link
                                    to={`/position/${step.id}`}
                                    key={step.id}
                                    id={`step-${step.id}`}
                                    className={styles.card}
                                >
                                    <img
                                        className={styles.img}
                                        src={step.image}
                                        alt={step.title}
                                    />
                                </Link>
                            ),
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Positions;
