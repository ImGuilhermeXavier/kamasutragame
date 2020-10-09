import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as NextIcon } from '../../Static/Icons/next.svg';
import { ReactComponent as Check } from '../../Static/Icons/check.svg';

import styles from './TourStep.module.scss';

const steps = [
    {
        title: 'Escolha o número de cartas',
        subtitle: 'Quantas opções voce vai jogar?',
        image: require('../../Static/Icons/cards.svg'),
    },
    {
        title: 'Faça a posição',
        subtitle: 'Voce pode pular se quiser',
        image: require('../../Static/Positions/ks-position-10.svg'),
    },
    {
        title: 'Veja o resultado no final',
        subtitle: 'Tenha salvo todas as posições feitas',
        image: require('../../Static/Icons/insight.svg'),
    },
    {
        title: 'Aproveite!',
        subtitle: ':D',
        image: require('../../Static/Icons/fire.svg'),
    },
];

const TourStep = ({ number }) => {
    number = Number(number);

    const [step] = steps.filter((step, index) => index + 1 === number);

    function setNavActive(step) {
        return number === step ? styles.navActive : '';
    }

    function setStepActive(step) {
        return `/tour/step-${step + 1}`;
    }

    function finish() {
        localStorage.setItem('finishOnboarding', true);
        return '/home';
    }

    return (
        <section className={`${styles.tour} animeLeft`}>
            <header>
                <h1 className={styles.title}>{step.title}</h1>
                <h3 className={styles.subtitle}>{step.subtitle}</h3>
            </header>
            <img className={`${styles.image}`} src={step.image} alt='cards' />
            <div>
                {number !== 4 ? (
                    <Link className={styles.nextBtn} to={setStepActive(number)}>
                        <NextIcon />
                    </Link>
                ) : (
                    <Link className={styles.finish} to={finish(number)}>
                        <Check />
                    </Link>
                )}

                <div className={styles.nav}>
                    <span
                        className={`${setNavActive(1)} ${styles.navButton}`}
                    ></span>
                    <span
                        className={`${setNavActive(2)} ${styles.navButton}`}
                    ></span>
                    <span
                        className={`${setNavActive(3)} ${styles.navButton}`}
                    ></span>
                    <span
                        className={`${setNavActive(4)} ${styles.navButton}`}
                    ></span>
                </div>
            </div>
        </section>
    );
};

export default TourStep;
