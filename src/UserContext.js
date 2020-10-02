import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const navigate = useNavigate();
    const [cards, setCards] = React.useState([]);
    // const [donePositions, setDonePositions] = React.useState([]);

    function startGame(cardsArray) {
        const cardsArrayAndStatus = cardsArray.map((card) => {
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

    React.useEffect(() => {
        const storedCurrentGame = JSON.parse(
            localStorage.getItem('currentGame'),
        );

        if (!storedCurrentGame.filter((position) => !position.status).length) {
            navigate('/home');
        }

        setCards(storedCurrentGame);
    }, [navigate]);

    return (
        <UserContext.Provider value={{ startGame, cards, positionDone }}>
            {children}
        </UserContext.Provider>
    );
};
