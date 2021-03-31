import footerLogo from '../images/footerLogoHJ.png';

function Footer(){
    return(
        <footer>
        <img src={footerLogo} alt="Buy More Dollars" id="imgName"/>
            <p>©  2021 All rights reserved</p>
            <p id="rules">Rules and Policies</p>
        </footer>
    )

}
export default Footer;