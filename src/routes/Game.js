import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import Card from "../components/Card";
import burgerCard from "../images/cardBurger.png";
import piggyCard from "../images/piggyCard.png";
import tacoCard from "../images/tacoCard.png";
import cabbageCard from "../images/cabbageCard.png";
import leafyCard from "../images/leafyCard.png";

function Game(){

    //Storing all the flip card Images
    const fronts =[
        <img src={burgerCard} alt="Burger Card Image"/>,
        <img src={piggyCard} alt="Burger Card Image"/>,
        <img src={tacoCard} alt="Burger Card Image"/>,
        <img src={cabbageCard} alt="Burger Card Image"/>,
        <img src={leafyCard} alt="Burger Card Image"/>
    ]

    return (
        <main>
            <RegularHeader></RegularHeader>
            <section className="gameSection">
                <div className="titleInfo">
                    <h1>GOOD LUCK</h1>
                    <h3>First Name, Last Name</h3>
                </div>
                <div className="gameInfo">
                    <div className="timer">20:00:00</div>
                    <div className="score">0</div>
                </div>
                <div className="gameBoard">
                    <Card content =""></Card>
                    <Card/>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
};

export default Game;
