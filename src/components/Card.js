import React from "react";
import logo from "../images/buyMoreLogo.png";

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
            content = 'Front'
        }else {
            content = 'Back'
        }
    return (
        <main>
                    <div className="gameTile" onClick={this.flip.bind(this)}>
                        <div className="logoFrange">
                            <img src={logo} alt="" />
                            {this.state.faceUp ? 'Front' : 'Back'}
                            state: {JSON.stringify(this.state.faceUp)}

                        </div>
                    </div>    
        </main>
    );
    }
};

export default Card;
