import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../images/logo.svg";
import Footer from "../components/Footer";
import MobileFormHeader from "../components/MobileFormHeader";
import FormDesktopSide from "../components/FormDesktopSide";
import useForm from "../util/useForm";
import validateInfo from "../util/validateInfo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function LegalPage() {
    return (
        <main>
            <header>
                <MobileFormHeader />
                <img
                    id="buyMoreDollarsLogo"
                    src={logo}
                    alt="Logo Buy More Dollars "
                />
            </header>
            <section id="formPageElements">
            <FormDesktopSide />
            </section>
            <Footer />
        </main>

    );
}

export default LegalPage;
