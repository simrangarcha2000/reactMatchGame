import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import logo from "../images/buyMoreLogo.png";

const Game = () => {
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
                    <div className="timer">20:00:00</div>
                    <div className="score">0</div>
                </div>
                <div className="gameBoard">
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="gameTile">
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
};

export default Game;
