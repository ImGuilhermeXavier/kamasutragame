import React from 'react';
import Header from '../Header';

import cardsImage from '../../Static/Icons/cards.svg';

import styles from './GameChoseNumber.module.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const GameChoseNumber = () => {
    const [cardNumber, setCardNumber] = React.useState(4);
    const { startGame } = React.useContext(UserContext);
    const navigate = useNavigate();
    let arrayTotal;

    function changeCardNumber(plus) {
        if (plus) {
            setCardNumber(cardNumber + 1);
        } else if (cardNumber > 0) {
            setCardNumber(cardNumber - 1);
        }
    }

    function numberGenerator(arr, cardNumber) {
        if (arr.length >= cardNumber) {
            arrayTotal = arr;
            return;
        }
        const newNumber = Math.floor(Math.random() * 38 + 1);
        if (arr.indexOf(newNumber) < 0) {
            arr.push(newNumber);
        }
        numberGenerator(arr, cardNumber);
    }

    function saveCardNumber() {
        numberGenerator([], cardNumber);
        startGame(arrayTotal);
        return navigate('cards');
    }

    return (
        <section className={`${styles.content} animeLeft`}>
            <Header />
            <h1 className={styles.title}>Quantas posições?</h1>
            <div>
                <img src={cardsImage} alt='Cards' />
            </div>
            <div className={styles.number}>{cardNumber}</div>
            <div className={styles.buttons}>
                <button
                    onClick={() => {
                        changeCardNumber(false);
                    }}
                    className={`${styles.button} ${styles.buttonCount}`}
                >
                    <span className={styles.iconMinus}></span>
                </button>
                <button
                    onClick={saveCardNumber}
                    className={`${styles.button} ${styles.buttonStart}`}
                >
                    Começar
                </button>
                <button
                    onClick={() => {
                        changeCardNumber(true);
                    }}
                    className={`${styles.button} ${styles.buttonCount}`}
                >
                    <span className={styles.iconPlus}>+</span>
                </button>
            </div>
        </section>
    );
};

export default GameChoseNumber;
