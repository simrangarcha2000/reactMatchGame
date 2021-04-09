import React from "react";
import logo from "../images/cardBack.png";



/**Face UP is when the image is shoeing in the card  */
class Card extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            faceUp: props.faceUp,
        };
    }



    render(){
        let content;
        if(this.state.faceUp){
            content = this.props.content;
        }else {
            content = <img src={logo} alt="Back Side of Card"/>
        }
    return (
        <article>
            <div className="gameTile" >
                    {content}  
            </div> 
        </article>
    );
    }
};

export default Card;
