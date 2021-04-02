import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../images/logo.svg";
import Footer from "../components/Footer";
import MobileFormHeader from "../components/MobileFormHeader";

function LegalPage() {
    return (
        
        <div>
            console.log("Legal");
            <div class="row">
                <div class="col l12 logo-box">
                    <img class="responsive" src="" alt="main logo" />
                </div>
            </div>
            <div class="row">
                <div class="col l6 image-box"></div>

                <div class="col l6 terms-box"></div>
            </div>

            <footer>
                <div class=" col l12 m-footer">
                    <div class="col l6 right-f"></div>

                    <div class="col l6 left-f"></div>
                </div>
            </footer>
        </div>
    );
}

export default LegalPage;
