import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";

const Game = () => {
    return (
        <main>
            <RegularHeader></RegularHeader>
            <section>
                <div className="titleInfo">
                    <h1>GOOD LUCK</h1>
                    <h3>First Name, Last Name</h3>
                </div>
                <div className="gameInfo"></div>
                <div className="gameBoard"></div>
            </section>
            <Footer></Footer>
        </main>
    );
};

export default Game;
