import React from 'react';
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";

function WinPage() {
    const form = useSelector((state) => state.form);

    return (
        <div>
            <RegularHeader></RegularHeader>
            <section class="yellow-box">
                
            <div className="titleInfo home">
                    <h1>WELCOME BACK</h1>
                    <h3>{form.username}</h3>
                </div>
 <div class="win-content">
                <div class="heading">
                    <h1>Congrats!</h1>
                </div>
                <div class="win-para">
                    <p>You have WON the game.!!<br></br>Please answer the following question</p>
                </div>
                <div class="question-box">
                    <p>What is the answer to 1+1? </p>
                </div>
                <div class="answer-box">
                    <div class="grey">
                    <input  class="a-box"   type="text"/>
                    </div>

                    <div class="btn-answer">
                    <button class="btn-a">
                        <p>ENTER</p>
                    </button>
                    </div>

                    <div class="time-box">

                        <div class="time-p">
                            <p>COME BACK IN</p>
                        </div>

                        <div class="timeFrame">
                            <p>36:59:33</p>
                        </div>

                    </div>
                </div>

                </div>

            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default WinPage
