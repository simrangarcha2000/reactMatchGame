import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function WinPage() {
    // const form = useSelector((state) => state.form);

    return (
        <div>
            <RegularHeader></RegularHeader>
            <section className="yellow-box">
                <div className="titleInfo home">
                    <h1 style={{ textAlign: "center" }}>WELCOME BACK</h1>
                    {/* <h3>{form.username}</h3> */}
                </div>
                <div className="win-content">
                    <div className="heading">
                        <h1>Congrats!</h1>
                    </div>
                    <div className="win-para">
                        <p>
                            You have WON the game.!!<br></br>Please answer the
                            following question
                        </p>
                    </div>
                    <div className="question-box">
                        <p>What is the answer to 1+1? </p>
                    </div>
                    <div className="answer-box">
                        <div className="grey">
                            <input className="a-box" type="text" />
                        </div>

                        <div className="btn-answer">
                            <button className="btn-a">
                                <p>ENTER</p>
                            </button>
                        </div>

                        <div className="time-box">
                            <div className="time-p">
                                <p>COME BACK IN</p>
                            </div>

                            <div className="timeFrame">
                                <p>36:59:33</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    );
}

export default WinPage;
