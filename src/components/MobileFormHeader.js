import mADimg1 from '../images/moneyBagTextHJ.png';
import mADimg2 from '../images/moneyBagHJ.png';

function MobileFormHeader(){
    return(
        <section class = "mobileHeader">
        <div class="formMobileAdImages">  
            <img src={mADimg2} alt="Money bag" id="moneyBagM"/>
            <img src={mADimg1} alt="Chance to win $10,000" id="moneyBagTextM"/>
        </div>
            <p class="whiteText">Match the right tiles of this game every 48-hour periods, If you win, you will get amazing prizes!</p>
            <p id="underlineText"><u>The prizes are as follows: </u></p>
            <p>1 prize of $10,000 BuyMore Dollars, 5 prizes of $750 BuyMore Dollars, 10 prizes of $100 BuyMore Dollars,  100 prizes of $20 BuyMore Dollars.</p>
        </section>
    )

}
export default MobileFormHeader;