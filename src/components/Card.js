import React, { useState } from "react";
import logo from "../images/buyMoreLogo.png";

const Card = ({ content, hide }) => {
    if (hide) {
        return (
            <div className="gameTile">
                <div className="logoFrange">
                    <img src={logo} alt="" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="gameTileSelected">
                <img src={content.imgUrl} alt="" />;
            </div>
        );
    }
};

export default Card;
