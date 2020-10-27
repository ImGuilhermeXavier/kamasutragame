import React from 'react';
import { useNavigate } from 'react-router-dom';
import position from './positions';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const navigate = useNavigate();
    const [cards, setCards] = React.useState([]);

    function startGame(cardNumber) {
        const cardArray = numberGenerator(cardNumber);
        const cardsArrayAndStatus = cardArray.map((card) => {
            return { number: card, status: '' };
        });
        setCards(cardsArrayAndStatus);
        localStorage.setItem(
            'currentGame',
            JSON.stringify(cardsArrayAndStatus),
        );
    }

    function positionDone(id, status) {
        const currentCard = cards.filter((card) => card.number === id)[0];
        currentCard.status = status;
        const newCardsArray = cards.map((card) =>
            card === currentCard ? currentCard : card,
        );
        setCards(newCardsArray);
        localStorage.setItem('currentGame', JSON.stringify(cards));
    }

    function positionRefreshed(id) {
        const newCard = numberGenerator(1)[0];
        if (cards.filter((card) => card.number === newCard).length) {
            return positionRefreshed(id);
        }
        const newCardsArray = cards.map((card) => {
            if (card.number === id) {
                card.number = newCard;
                return card;
            }
            return card;
        });
        setCards(newCardsArray);
    }

    function numberGenerator(cardNumber, arr = []) {
        if (arr.length >= cardNumber) {
            return arr;
        }
        const newNumber = Math.floor(Math.random() * position.length);
        if (arr.indexOf(newNumber) < 0) {
            arr.push(newNumber);
        }
        return numberGenerator(cardNumber, arr);
    }

    React.useEffect(() => {
        const storedCurrentGame = JSON.parse(
            localStorage.getItem('currentGame'),
        );

        if (
            storedCurrentGame &&
            !storedCurrentGame.filter((position) => !position.status).length
        ) {
            navigate('/home');
        }

        setCards(storedCurrentGame);
    }, [navigate]);

    return (
        <UserContext.Provider
            value={{ startGame, cards, positionDone, positionRefreshed }}
        >
            {children}
        </UserContext.Provider>
    );
};
