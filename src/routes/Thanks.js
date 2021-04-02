import thanksBage from "../images/thanksBag.png";
import { Link } from "react-router-dom";

function Thanks(props) {
    return (
        <div id="thanks">
            <img id="img_1" src={thanksBage} alt="tick" />
            <div id="thanks_text">
                <h2>THANK YOU {props.namer}</h2>
                <p>
                    Your Form has been submitted.
                    <br></br>Now you have a chance to win $10,000.
                </p>
            </div>

            <Link className="toHomeThanks" to="/home">
                Play Game
            </Link>
        </div>
    );
}

export default Thanks;
