import React from 'react';
import Header from '../Header';

import styles from './Positions.module.scss';
import steps from '../../positions';

import positions from '../../Static/Icons/positions.svg';
import { Link, useParams } from 'react-router-dom';
import Head from '../Head/Head';

function scrollToElement(id) {
    const card = document.getElementById(`step-${id}`);
    window.scrollTo(
        0,
        card.getBoundingClientRect().top -
            window.innerHeight / 2 +
            card.offsetHeight,
    );
    card.focus();
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
            <Head
                title='Posições'
                description='As melhores posições para casais no jogo Kama Sutra'
            />
            <Header
                complete='true'
                title='Posições'
                linkPrev='/home'
                image={positions}
                subtitle={`Total: ${steps.length}`}
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
                                        loading='lazy'
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
                                        loading='lazy'
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
