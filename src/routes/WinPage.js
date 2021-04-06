import React from 'react';
import Footer from "../components/Footer";
import RegularHeader from "../components/RegularHeader";
import Sponsors from "../components/Sponsors";
import { useSelector } from "react-redux";

function WinPage() {
    const form = useSelector((state) => state.form);

    return (
        <div>
            <RegularHeader></RegularHeader>
            <section class="yellow-box">
                <div class="">
            <div className="titleInfo home">
                    <h1>WELCOME BACK</h1>
                    <h3>{form.username}</h3>
                </div>
                </div>
            </section>
            <Sponsors></Sponsors>
            <Footer></Footer>
        </div>
    )
}

export default WinPage
