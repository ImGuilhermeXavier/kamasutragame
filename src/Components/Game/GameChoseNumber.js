import React from 'react';
import Header from '../Header';

import cardsImage from '../../Static/Icons/cards.svg';

import styles from './GameChoseNumber.module.scss';
import { Link } from 'react-router-dom';

const GameChoseNumber = () => {
    const [cardNumber, setCardNumber] = React.useState(4);
    let arrayTotal;
    let nextStep;

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
        let newNumber = Math.floor(Math.random() * 50 + 1);
        if (arr.indexOf(newNumber) < 0) {
            arr.push(newNumber);
        }
        numberGenerator(arr, cardNumber);
    }

    function saveCardNumber() {
        numberGenerator([], cardNumber);
        console.log(arrayTotal);
        nextStep = arrayTotal.shift();
        localStorage.setItem('cards', JSON.stringify(arrayTotal));
        return <Link to={`/game/${nextStep}`} />;
    }

    return (
        <div className={`${styles.content} animeLeft`}>
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
        </div>
    );
};

export default GameChoseNumber;
