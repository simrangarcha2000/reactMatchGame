import React from 'react'
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";

function LosePage() {

    const form = useSelector((state) => state.form);
    return (
        <div>
            
            <RegularHeader></RegularHeader>
            <section class="yellow-box2">

            <div className="titleInfo home">
                    <h1>BETTER LUCK NEXT TIME!</h1>
                    <h3>{form.username}</h3>
            </div>

            <div class="lose-content">

            <div class="heading2">
                    <h1>Sorry!</h1>
                </div>
                <div class="win-para">
                    <p>Sad to see you lose the game. 
                    <br></br>Wins are not easy, and we understand that<br></br>
                    Better luck next time.</p>
                </div>

            </div>

            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default LosePage
