import React from 'react';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [cards, setCards] = React.useState([]);
    // const [donePositions, setDonePositions] = React.useState([]);

    function startGame(cardsArray) {
        const cardsArrayAndStatus = cardsArray.map((card) => {
            return { number: card, status: '' };
        });
        setCards(cardsArrayAndStatus);
        localStorage.setItem('currentGame', JSON.stringify(cards));
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
        setCards(storedCurrentGame);
    }, []);

    return (
        <UserContext.Provider value={{ startGame, cards, positionDone }}>
            {children}
        </UserContext.Provider>
    );
};
