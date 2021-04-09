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




class Game extends React.Component{

    /*constructor(props){
        super(props)
    }*/

    flip() {
        console.log("flipping");
        console.log(`Flipping from ${this.state.faceUp}`)
        this.setState({faceUp: !this.state.faceUp})
        console.log(`Flipping to ${this.state.faceUp}`)
    }
    

render(){
    //Storing all the flip card Images
    const fronts =[
        <img src={burgerCard} alt="Burger Card Image"/>,
        <img src={piggyCard} alt="Piggy Card Image"/>,
        <img src={tacoCard} alt="Taco Card Image"/>,
        <img src={cabbageCard} alt="Cabbage Card Image"/>,
        <img src={leafyCard} alt="Leafy Card Image"/>
    ]

    //To shuffle the cards - Randomizing
    const deck = (fronts.concat(fronts).sort(()=> Math.random() - 0.5)
    .map(f => {
        return {
            content: f,
            faceUp: false
        }
    })
            );

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
                    {deck.map((f) => {
                        return (
                        <>
                    <Card flip ={() => {this.flip()}} content ={f.content} faceUp={f.faceUp}/>
                    </>)

                    })}

                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </main>
    );
};
}

export default Game;
