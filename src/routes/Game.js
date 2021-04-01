import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";

const Game = () => {
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
                <div className="gameBoard"></div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Game;
