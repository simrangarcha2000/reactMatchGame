import React from "react";
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cardsImage from "../images/homeCards.png";

const Home = () => {
    const form = useSelector((state) => state.form);

    return (
        <main>
            <RegularHeader></RegularHeader>
            <section className="homeSection">
                <div className="titleInfo home">
                    <h1>WELCOME BACK</h1>
                    <h3>{form.username}</h3>
                </div>
                <div className="status">
                    <img src={cardsImage} alt="" />
                    <Link to="/game" className="playbtn">
                        Play
                    </Link>
                    <div className="textStatus">
                        <p className="text1">
                            Unfortunately , you are not eligible to play the
                            game now. Match the right tiles of this game every
                            48-hour periods, If you win, you will get amazing
                            prizes!
                        </p>
                        <p className="text2">
                            The prizes are as follows: <br></br> 1 prize of
                            $10,000 BuyMore Dollars, 5 prizes of $750 BuyMore
                            Dollars, 10 prizes of $100 BuyMore Dollars, 100
                            prizes of $20 BuyMore Dollars
                        </p>
                        <p className="text3">
                            Come back soon to enjoy the game!!!
                        </p>
                    </div>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
};

export default Home;
