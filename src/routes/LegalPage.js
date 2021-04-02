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
            <section id="legalPageElements">
                <FormDesktopSide />
                <aside class="l-offset-5">
                    <h1 id="terms">Terms of Services</h1>
                    <article class = "termsBox">
                        <p>
                        These are the terms of service (“<b>Terms</b>”) that apply to all use of our BuyMore Services. These Terms apply when you register to create an account (“<b>Account</b>”) and play the game. By doing so, you confirm that you accept these Terms and that you agree to comply with them. If you do not agree to these Terms, then you must not use our Service. We recommend that you print a copy of these Terms for future reference.
                        We reserve the right to amend these Terms from time to time and will notify you of the new version of the Terms if that happens. Your continued use of the Service will be deemed to be acceptance of any new Terms.<br/><br/>

                        We are the owner or the licensee of all intellectual property rights in our Service (other than content uploaded or published by you). All such rights are reserved.
                        Software and related documentation provided in relation to the Service is only provided in relation to your use of the Service and are not provided, or to be used, for any other purpose. Except where this is part of your legitimate use of the Service you are not permitted to copy, modify, republish, download, display or distribute all or any part of such software or documentation in any form or media or by any means. Nor are you permitted to reverse compile, disassemble, or reverse engineer such software or make use of such software or documentation to build a product or service which competes with our Service.

                        You may use the Service for the purpose of creating interactive digital content. Such use is subject to you and all users you have authorised to access your Account (“<b>Authorised Users</b>”) complying with these Terms. You are responsible for your Authorised Users use of the Service. If you discover any unauthorised use of the Service, you must promptly let us know.
                        You must meet our eligibility criteria in order to use our Service. Accordingly, you represent and warrant to us that:<br/>
                        <ul>
                        <li>you are at least 16 years old.</li>
                        <li>you have not previously been suspended or removed from the Service, and</li>
                        <li>you have all requisite power and authority to enter these Terms.</li>
                        </ul>
                        You may use our Service only for lawful purposes and upload and publish content that you are entitled to submit. You are responsible for complying with the laws of the country from where you use the Service and to ensure you have all necessary permission and consents in place in relation to your use of the Service.
                        <br/>
                        You may not, and you warrant that you will not, use our Service:
                        <br/>
                        <ul>
                            <li>In any way that breaches any applicable local, national or international law or regulation.</li>
                            <li>In any way that is unlawful or fraudulent or has any unlawful or fraudulent purpose or effect.</li>
                            <li>In any way that consistently breaches our Fair Use Policy.</li>
                            <li>To upload material or other content which does not comply with our Content Standards.</li>
                            <li>To reproduce, duplicate, copy or re-sell any part of our Service.</li>
                            <li>To access, without authority, interfere with, damage or disrupt any part of our Service, any equipment or network on which our Service is stored; any software used in the provision of our Service; or any equipment or network or software owned or used by any third party.</li>
                            <li>Attempt to compromise any security measures we have put in place.</li>
                        </ul><br/>
                        In the event of breach of any of your obligations under these Terms (including any breach of these warranties or our Content Standards), your right to use our Service will cease immediately and we reserve the right, without liability to you, to deactivate your Account.
                        You will also be liable to us and indemnify us for any such breach. This means you will be responsible for any loss or damage we suffer as a result of your breach of these Terms.
                        <br/><br/>
                        As part of our commitment to providing a high-quality, fast and reliable service, we have a Fair Use Policy. The Fair Use Policy contains guidelines for your use of the Service to ensure that each customer has a consistently high-quality experience. We take measures to ensure usage is within reasonable parameters and in accordance with your Contract.
We have a Fair Use Policy because we provide a multi-tenant service. This means that our Service is used concurrently by a number of users. If a single customer places very high demands on the Service then it is possible that this will affect the experience for other users. The vast majority of our customers use our Service considerately and their usage levels during peak hours don’t disproportionately affect the shared network and service capacity. Even though only a very small number of our customers may use our Service inappropriately, their activity has the potential to affect the Service for others. Our Fair Use Policy manages the inappropriate use and makes sure our Service can be used fairly by everyone.

                        <br/>For that reason, if you consistently generate exceptionally high load over a sustained period of time in breach of our Fair Use Policy, we reserve the right to restrict access to your Account.
<br/>
                        <br/>Whenever you upload or publish content, you must comply with the Content Standards set out below. We do not monitor such content as part of the Service. You are solely responsible for all the content you upload or publish using the Service, and any intellectual property rights in such content will be owned by you.
                        <br/>You acknowledge that when you publish content, it will be considered non-confidential. You retain all of your ownership rights in your content, but you are required to grant us a licence to use, store, copy and modify that content and, if applicable, to distribute and make it available to third parties in accordance for the purposes of our provision of the Service to you. You can delete your content at any time, but please note that you will not be able to retrieve it from your Account after it has been deleted. You are solely responsible for securing and backing up your content.
                        <br/>We also have the right to disclose your identity to any third party who is claiming that any content uploaded or published by you via our Service constitutes a violation of their intellectual property rights, or of their right to privacy.
                        <br/>We have the right to remove any content you upload or publish via our Service if, in our opinion, it does not comply with our Content Standards.<br/><br/><br/>
                        <b><u>Content Standards</u></b><br/><br/>These Content Standards apply to any and all information, material or other content which you upload or publish via our Service. These standards must be complied with in spirit as well as to the letter. We will determine, in our discretion, whether any content breaches the Content Standards.
                        <br/>Content must:<br/>
                        </p>
                        <ul>

<li>Be accurate (where it states facts).</li>
<li>Be genuinely held (where it states opinions).</li>
<li>Comply with all applicable laws (including the law applicable in any country from which it is posted).</li>
</ul>
<p>Content must not:</p>
<ul>
<li>Be defamatory of any person.</li>
<li>Be obscene, offensive, hateful or inflammatory.</li>
<li>Promote violence or sexually explicit material.</li>
<li>Promote any illegal activity or discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.</li>
<li>Infringe any copyright, database right, trademark or other intellectual property right of any other person.</li>
<li>Be likely to deceive any person or be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.</li>
<li>Be likely to harass, upset, embarrass, alarm or annoy any other person.</li>
<li>Breach any legal duty owed to a third party, such as a contractual duty or a duty of confidence.</li>
<li>Impersonate any person or misrepresent your identity or affiliation with any person.</li>
<li>Advocate, promote, incite any party to commit, or assist any unlawful or criminal act such as (by way of example only) copyright infringement or computer misuse.</li>
</ul>
<p><strong>Our obligations</strong></p>
<p>We shall, in relation to any personal data processed in connection with the performance by us of our obligations under this Contract:</p>
<ul>
<li>process the personal data only on your documented instructions (unless otherwise required by applicable law).</li>
<li>maintain records of any processing of personal data that we carry out on your behalf. </li>
<li>ensure that we have in place appropriate technical and organisational measures to protect against unauthorised or unlawful processing of personal data and against accidental loss or destruction of, or damage to, personal data. </li>
<li>ensure that all personnel who have access to and/or process personal data are obliged to keep the personal data confidential. </li>
<li>not transfer any personal data outside of the European Economic Area unless we have provided appropriate safeguards in relation to the transfer. </li>
<li>assist you, at your cost, in responding to any request from a data subject and in ensuring compliance with your obligations under the Data Protection Legislation with respect to security, breach notifications, impact assessments and consultations with supervisory authorities or regulators. </li>
<li>notify you without undue delay on becoming aware of a personal data breach; and </li>
<li>at your written direction, delete or return personal data and copies thereof to you on termination of this Contract (unless required by applicable law(s) to store the personal data).</li>
</ul>
<p><strong>Use of sub-processors</strong> <br /><br />You consent to us appointing third-party processors of personal data for the purposes set out in our Privacy Policy. We confirm that we have entered or will enter (as the case may be), a written agreement with any such third-party processor incorporating terms which are substantially similar to those set out in this section. <br /><br /><strong>Your responsibility</strong> <br /><br />You warrant that: </p>
<ul>
<li>you are not aware of any circumstances likely to give rise to breach of the Data Protection Legislation (including any personal data breach).</li>
<li>you have a lawful basis under the Data Protection Legislation to transfer the personal data to us for processing under this Contract and such use will comply with all Data Protection Legislation.</li>
<li>you will promptly notify us of any action we must take to assist you with ensuring compliance with your obligations under Data Protection Legislation, including with request to security, breach notifications, impact assessments and consultations with supervisory authorities or regulators; and</li>
<li>the personal data is necessary, adequate, relevant, accurate and up-to-date and you will notify us promptly of any changes to the personal data.</li>
</ul>
<p>&nbsp;</p>
<p>We shall use commercially reasonable endeavours to make the Services available 24 hours a day, seven days a week, except for planned or unplanned maintenance. We will try and ensure all maintenance is not carried out during office hours. Our servers are hosted in France by OVH. <br />We will endeavour to respond to all customer support queries within 72 hours. <br />You are solely responsible for procuring and maintaining your network connections and telecommunications links from your systems to our data centres. We are not liable for any delays, delivery failures and any other loss or damage arising from or relating to your network connections or telecommunications links or caused by the internet. <br /><br />This section sets out our entire liability to you in respect of any breach of Contract or any use made by you of the Service. <br />We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation. <br />Subject to the paragraph above, we shall not be liable for any loss of business, goodwill or reputation, loss of profit, business interruption, loss of anticipated savings or for any indirect or consequential loss or damage. <br /><br />Contact us <br /><br />If you wish to contact us in writing, or a provision of these Terms requires you to give us a notice in writing (for example, to cancel the Contract), please do so by email at buymore.com, <br />If we have to contact you or give you notice in writing, we will do so by email, by hand, or by pre-paid post to the address details provided by you when setting up, or updating, your Account.</p>
<p>&nbsp;</p>
<p>We shall use commercially reasonable endeavours to make the Services available 24 hours a day, seven days a week, except for planned or unplanned maintenance. We will try and ensure all maintenance is not carried out during office hours. Our servers are hosted in France by OVH. <br />We will endeavour to respond to all customer support queries within 72 hours. <br />You are solely responsible for procuring and maintaining your network connections and telecommunications links from your systems to our data centres. We are not liable for any delays, delivery failures and any other loss or damage arising from or relating to your network connections or telecommunications links or caused by the internet. <br /><br />This section sets out our entire liability to you in respect of any breach of Contract or any use made by you of the Service. <br />We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors and for fraud or fraudulent misrepresentation. <br />Subject to the paragraph above, we shall not be liable for any loss of business, goodwill or reputation, loss of profit, business interruption, loss of anticipated savings or for any indirect or consequential loss or damage. <br /><br /><strong>Contact us</strong> <br /><br />If you wish to contact us in writing, or a provision of these Terms requires you to give us a notice in writing (for example, to cancel the Contract), please do so by email at buymore.com, <br />If we have to contact you or give you notice in writing, we will do so by email, by hand, or by pre-paid post to the address details provided by you when setting up, or updating, your Account.</p>
<p>&nbsp;</p>
                        

                    </article>
                    <h1 id="terms">Privacy Policy</h1>
                    <article class = "termsBox">
                    <p><strong>About us</strong><br /><br />We respect your privacy and are committed to protecting your personal data. We are a digital solutions provider. We offer a full suite of services, including audit, strategy, branding, gamification, web marketing, web design, graphic design, editorial cover and web app development. <br /><br />We also provide gamification and digitisation solutions through our bespoke BuyMore product. <br />Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. <br /><br /><strong>Purpose of this privacy policy</strong><br /><br />This privacy policy aims to give you information on how we collect and process your personal data so that you can be confident when you use our websites, access our products or purchase any of our services that you know what your personal data is being used for and that it is being kept safe. <br />It is important that you read this privacy policy together with any other notice which we may provide to you in the future, so that you are always fully aware of how and why we are using your data. Unless we let you know otherwise, this privacy policy supplements any future notices we may give you.<br /><br /><strong>How is your personal data collected?</strong><br /><br />We use different methods to collect data from and about you including through:</p>

                    </article>
                    <h1 id="terms">Game Conditions</h1>
                    <article class = "termsBox">
                        <p>
                        <b>Contest information,</b><br/>


The contest will remain online for 3 weeks. During this time users will be able to play once per 48 hours if you have won or once per 24 hours if you lose. The prices for the winners are based on their ranks. After you win the game, you will have to answer a skill question, after which you will have the BuyMore Dollars to your account . There will respective prices based on your rankings. The user will have a limited time span of 20 seconds and should at least have 5 matches. You will be competing against the fellow users for the given time. <br/>

<b>Game instructions,</b><br/>

The objective is to collect the most pairs of cards. Shuffle the cards and lay them on the table, face down, in rowsPlay then continues in a clockwise direction. On each turn, a player turns over any two cards (one at a time) and keeps them if the cards match (for instance, two kings) If they successfully match a pair, they get to keep the cards. When a player turns over two cards that do not match, those cards are turned face down again (in the same position). The trick is to remember which cards are where. The person with the most pairs at the end of the game wins. The game will consist of 10 tiles.  The user must make five matches to win within a span of 20seconds.  If you fail to match all tiles, you do not win the system selected prize.  

                        </p>

                    </article>
                </aside>

            </section>

            
            
            
            <Footer />
        </main>

    );
}

export default LegalPage;
