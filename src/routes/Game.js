import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useHistory } from "react-router-dom";

// import WinPage from "../routes/WinPage";
// import Timer from "../components/Timer";

import burgerCard from "../images/gameCard1.png";
import piggyCard from "../images/gameCard2.png";
import tacoCard from "../images/gameCard3.png";
import cabbageCard from "../images/gameCard4.png";
import leafyCard from "../images/gameCard5.png";
const fronts = [
    { imgUrl: burgerCard, name: "burger" },
    { imgUrl: piggyCard, name: "piggy" },
    { imgUrl: cabbageCard, name: "cabbage" },
    { imgUrl: tacoCard, name: "taco" },
    { imgUrl: leafyCard, name: "leafy" },
];

//To shuffle the cards - Randomizing
const deck = fronts.concat(fronts).sort(() => Math.random() - 0.5);
console.log(deck);

const Game = () => {
    const history = useHistory();
    const [gameStarted, setGameStarted] = useState(false);
    const [timerCount, setTimerCount] = useState(null);
    useEffect(() => {
        if (!timerCount) {
            if (timerCount === 0) {
                if (completedCards.length === 5) {
                    //TODO SEND TO WIN PAGE
                    setGameStarted(false);
                    console.log("Win");
                    history.push("/WinPage");
                } else {
                    //TODO SEND TO LOSE PAGE
                    console.log("Lose");
                    history.push("/LosePage");
                }
            }
            return;
        }
        const intervalId = setInterval(() => {
            setTimerCount(timerCount - 1);
        }, 1000);
        console.log(completedCards.length);
        if (completedCards.length === 5) {
            //TODO SEND TO WIN PAGE
            console.log("Win");
            setGameStarted(false);
            clearInterval(intervalId);
            history.push("/WinPage");
        }
        return () => clearInterval(intervalId);
    }, [timerCount]);
    const [selectedCards, setSelectedCards] = useState({
        card1: null,
        card2: null,
    });
    const [completedCards, setCompletedCards] = useState([]);

    const handleCards = (item, card) => {
        if (gameStarted) {
            if (selectedCards.card1 === null) {
                setSelectedCards({
                    ...selectedCards,
                    card1: { id: item, name: card.name },
                });
            } else if (selectedCards.card2 === null) {
                setSelectedCards({
                    ...selectedCards,
                    card2: { id: item, name: card.name },
                });
            }
        }
    };
    useEffect(() => {
        if (!selectedCards.card1) return;
        if (!selectedCards.card2) return;
        if (selectedCards.card1.name === selectedCards.card2.name) {
            setCompletedCards([...completedCards, selectedCards.card1.name]);
            setSelectedCards({
                card1: null,
                card2: null,
            });
        } else {
            setTimeout(() => {
                setSelectedCards({
                    card1: null,
                    card2: null,
                });
            }, 500);
        }
    }, [selectedCards]);
    const form = useSelector((state) => state.form);
    return (
        <main>
            <RegularHeader></RegularHeader>
            <section className="gameSection">
                <div className="titleInfo">
                    <h1>GOOD LUCK</h1>
                    <h3>{form.username}</h3>
                </div>
                <div className="gameInfo">
                    <div className="timer">{timerCount}</div>
                    <div className="score">{completedCards.length}</div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setTimerCount(20);
                            setGameStarted(true);
                        }}
                    >
                        Start Game
                    </button>
                </div>
                <div className="gameBoard">
                    {deck.map((f, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div
                                    onClick={() => {
                                        handleCards(index, f);
                                    }}
                                >
                                    <Card
                                        content={f}
                                        hide={
                                            completedCards.find(
                                                (card) => card === f.name
                                            )
                                                ? false
                                                : selectedCards.card1?.id ===
                                                      index ||
                                                  selectedCards.card2?.id ===
                                                      index
                                                ? false
                                                : true
                                        }
                                    />
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
};

export default Game;
