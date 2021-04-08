import React from "react";
import logo from "../images/cardBack.png";
import burgerCard from "../images/cardBurger.png";


/**Face UP is when the image is shoeing in the card  */
class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            faceUp: false,
        };
    }

    flip(){
        console.log(`Flipping from ${this.state.faceUp}`)
        this.setState({faceUp: !this.state.faceUp})
        console.log(`Flipping to ${this.state.faceUp}`)
    }

    render(){
        let content;
        if(this.state.faceUp){
            content = <img src={burgerCard} alt="Burger Card Component" />
        }else {
            content = <img src={logo} alt="Back Side of Card"/>
        }
    return (
        <main>
            <div className="gameTile" onClick={this.flip.bind(this)}>
                    {content}  
            </div> 
        </main>
    );
    }
};

export default Card;
