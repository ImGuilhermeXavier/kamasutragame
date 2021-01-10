import React from 'react';
import Header from '../Header';

import { ReactComponent as Cock } from '../../Static/Icons/cock.svg';

import styles from './GameFinish.module.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const GameFinish = () => {
    const navigate = useNavigate();
    const { cards, savePositionsDone } = React.useContext(UserContext);

    React.useEffect(() => {
        savePositionsDone();
    }, [savePositionsDone]);

    return (
        <section className={`animeLeft ${styles.finish}`}>
            <Header hidePrev='true' />
            <Cock />
            <div className={styles.congratulation}>
                <span className={styles.title}>Parabéns</span>
                <span>Voce concluiu {cards.length} posições</span>
            </div>
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => navigate('/estatisticas')}
                >
                    Estatística
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigate('/home')}
                >
                    Início
                </button>
            </div>
        </section>
    );
};

export default GameFinish;
