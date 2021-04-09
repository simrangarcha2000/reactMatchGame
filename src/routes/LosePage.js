import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";
import coupen from "../images/coupen.png";

function LosePage() {
    // const form = useSelector((state) => state.form);
    return (
        <div>
            <RegularHeader></RegularHeader>
            <section className="yellow-box2">
                <div className="titleInfo home">
                    <h1 style={{ textAlign: "center" }}>
                        BETTER LUCK NEXT TIME!
                    </h1>
                    {/* <h3>{form.username}</h3> */}
                </div>

                <div className="lose-content">
                    <div className="heading2">
                        <h1>Sorry!</h1>
                    </div>
                    <div className="lose-para">
                        <p>
                            Sad to see you lose the game.
                            <br></br>Wins are not easy, and we understand that
                            <br></br>
                            Better luck next time.
                        </p>
                    </div>

                    <div className="coupen-banner">
                        <img src={coupen} alt="coupens" />
                    </div>

                    <div className="time-box2">
                        <div className="time-p2">
                            <p>COME BACK IN</p>
                        </div>

                        <div className="timeFrame2">
                            <p>36:59:33</p>
                        </div>
                    </div>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    );
}

export default LosePage;
