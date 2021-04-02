import React from "react";
import sponsor1 from "../images/homeClient1.png";
import sponsor2 from "../images/homeClient2.png";
import sponsor3 from "../images/homeClient3.png";
import sponsor4 from "../images/homeClient4.png";
import sponsor5 from "../images/homeAd.png";

const Sponsors = () => {
    return (
        <section className="sponsors">
            <h3>WITH THE HELP OF</h3>
            <div className="sponsorGrid">
                <div className="sponsorItem sponsorA">
                    <img src={sponsor5} alt="" />
                </div>
                <div className="sponsorItem sponsorB">
                    <img src={sponsor1} alt="" />
                </div>
                <div className="sponsorItem sponsorC">
                    <img src={sponsor2} alt="" />
                </div>
                <div className="sponsorItem sponsorD">
                    <img src={sponsor3} alt="" />
                </div>
                <div className="sponsorItem sponsorE">
                    <img src={sponsor4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
