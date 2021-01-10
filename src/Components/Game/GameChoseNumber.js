import React from 'react';
import Header from '../Header';

import cardsImage from '../../Static/Icons/cards.svg';

import styles from './GameChoseNumber.module.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

import { ReactComponent as Add } from '../../Static/Icons/add.svg';
import { ReactComponent as Remove } from '../../Static/Icons/remove.svg';

const GameChoseNumber = () => {
    const [cardNumber, setCardNumber] = React.useState(4);
    const { startGame } = React.useContext(UserContext);
    const navigate = useNavigate();

    function addCardNumber() {
        if (cardNumber < 36) setCardNumber(cardNumber + 1);
    }

    function removeCardNumber() {
        setCardNumber(cardNumber - 1);
    }

    function saveCardNumber() {
        startGame(cardNumber);
        return navigate('cartas');
    }

    return (
        <section className={`${styles.content} animeLeft`}>
            <Header />
            <h1 className={styles.title}>Quantas posições?</h1>
            <div>
                <img src={cardsImage} alt='Cartas' />
            </div>
            <div className={styles.number}>{cardNumber}</div>
            <div className={styles.buttons}>
                <button
                    onClick={removeCardNumber}
                    className={`${styles.button} ${styles.buttonCount}`}
                >
                    <Remove />
                </button>
                <button
                    onClick={saveCardNumber}
                    className={`${styles.button} ${styles.buttonStart}`}
                >
                    Começar
                </button>
                <button
                    onClick={addCardNumber}
                    className={`${styles.button} ${styles.buttonCount}`}
                >
                    <Add />
                </button>
            </div>
        </section>
    );
};

export default GameChoseNumber;
