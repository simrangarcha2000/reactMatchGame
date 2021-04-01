import footerLogo from '../images/footerHJ.png';

function Footer(){
    return(
        <footer>
            <img src={footerLogo} id="imgName"/>
            <p>©  2021 All rights reserved</p>
            <p id="rules">Rules and Policies</p>
        </footer>
    )

}
export default Footer;