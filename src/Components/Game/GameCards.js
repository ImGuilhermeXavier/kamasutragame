import React from 'react';
import { UserContext } from '../../UserContext';
import Header from '../Header';

import { TransitionGroup } from 'react-transition-group';

import styles from './GameCards.module.scss';
import '../../App.scss';

import { ReactComponent as Check } from '../../Static/Icons/check.svg';
import { ReactComponent as Refresh } from '../../Static/Icons/refresh.svg';
import { useNavigate } from 'react-router-dom';
import EntryContainer from './EntryContainer';

const GameCards = () => {
    const {
        cards,
        positionDone,
        positionRefreshed,
        getAllPositions,
    } = React.useContext(UserContext);
    const [current, setCurrent] = React.useState({});
    const imageRef = React.createRef();
    const navigate = useNavigate();

    React.useEffect(() => {
        const firstCard = cards.find((card) => card.status === '');
        if (cards && firstCard) {
            setCurrent(
                getAllPositions().filter(
                    (step) => step.id === firstCard.number,
                )[0],
            );
        }
    }, [cards, getAllPositions]);

    function finishPosition(id, status) {
        positionDone(id, status);
        if (!cards.filter((card) => !card.status).length) {
            navigate('/game/finish');
        }
    }

    function refreshPosition(id) {
        positionRefreshed(id);
    }

    return (
        <div className={styles.gameCards}>
            <Header hidePrev='true' />
            {cards && current && (
                <>
                    <TransitionGroup className='tour-list'>
                        <EntryContainer key={current.image}>
                            <div className={styles.item}>
                                <img
                                    className={styles.image}
                                    ref={imageRef}
                                    src={current.image}
                                    alt={current.title}
                                />
                            </div>
                        </EntryContainer>
                    </TransitionGroup>
                    <div className={styles.howToMake}>
                        <h1 className={styles.title}>{current.title}</h1>
                        <h2>{current.description}</h2>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            onClick={() => refreshPosition(current.id)}
                            className={styles.button}
                        >
                            <Refresh />
                        </button>
                        <button
                            onClick={() => finishPosition(current.id, 'done')}
                            className={styles.button}
                        >
                            <Check />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default GameCards;
