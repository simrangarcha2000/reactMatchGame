import dADimg1 from "../images/moneyBagTextHJ.png";
import dADimg2 from "../images/moneyBagHJ.png";

function FormDesktopSide() {
    return (
        <aside id="formDesktopAd">
            <div className="formDesktopAdImages">
                <img
                    src={dADimg1}
                    alt="Chance to win $10,000"
                    id="moneyBagText"
                />
                <img src={dADimg2} alt="Money bag" id="moneyBag" />
            </div>
            <p className="whiteText">
                Match the right tiles of this game every 48-hour periods, If you
                win, you will get amazing prizes!
            </p>
            <p>
                <u>The prizes are as follows: </u>
            </p>
            <p>
                1 prize of $10,000 BuyMore Dollars, 5 prizes of $750 BuyMore
                Dollars, 10 prizes of $100 BuyMore Dollars, 100 prizes of $20
                BuyMore Dollars.
            </p>
        </aside>
    );
}
export default FormDesktopSide;
