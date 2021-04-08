import React from "react";
import logo from "../images/cardBack.png";



/**Face UP is when the image is shoeing in the card  */
class Card extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
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
            content = this.props.content;
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
