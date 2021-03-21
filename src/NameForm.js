import {withRouter} from 'react-router-dom';
import logo from './images/logo.svg';
import Footer from './components/Footer';
import MobileFormHeader from './components/MobileFormHeader';
import FormDesktopSide from './components/FormDesktopSide';


function NameForm(props){
    function goToThanks(e){
        e.preventDefault();
        console.log("Thanks");
        props.history.push('/thanks');
    }
    return (
        <main>
            <header>
                <MobileFormHeader/>
                <img  id = "buyMoreDollarsLogo" src={logo} alt = "Logo Buy More Dollars "/>
            </header>
            <section id="formPageElements">
                <FormDesktopSide/>

                
                <form id="registerForm">
                    <h1>JOIN THE BUY MORE FAMILY</h1>
                    <div>
                        <div>
                            <input
                                autocomplete="off"
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                            <p id="firstNameError" class="errorMessage"></p>
                        </div>

                        <div>
                            <input
                                autocomplete="off"
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                            <p id="lastNameError" class="errorMessage"></p>
                        </div>
                    </div>

                    <input
                        autocomplete="off"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Mobile Phone"
                        minlength="10"
                        required
                    />
                    <p id="phoneError" class="errorMessage"></p>

                    <input
                        autocomplete="off"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required
                    />
                    <p id="emailError" class="errorMessage"></p>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        minlength="8"
                        required
                    />
                    <p id="passwordError" class="errorMessage"></p>

                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    />
                    <p id="passwordEror" class="errorMessage"></p>

                    <input
                        autocomplete="off"
                        id="DateOfBirth"
                        type="date"
                        placeholder="Date of Birth"
                        required
                    />
                    <p id="dobError" class="errorMessage"></p>

                    <div class="line"></div>

                    <input
                        autocomplete="off"
                        type="text"
                        id="address"
                        placeholder="Address Line 1"
                        required
                    />
                    <p id="addressError" class="errorMessage"></p>

                    <input
                        autocomplete="off"
                        type="text"
                        id="address2"
                        placeholder="Address Line 2"
                    />
                    <p id="address2Error" class="errorMessage"></p>

                    <div >
                        <div>
                            <input
                                autocomplete="off"
                                type="text"
                                id="city"
                                placeholder="City"
                                required
                            />
                            <p id="cityError" class="errorMessage"></p>
                        </div>
                        <div>
                            <input
                                autocomplete="off"
                                type="text"
                                id="province"
                                placeholder="Province"
                                required
                            />
                            <p id="provinceError" class="errorMessage"></p>
                        </div>
                    </div>

                    <input
                        autocomplete="off"
                        type="text"
                        id="postalCode"
                        placeholder="PostalCode"
                        required
                    />
                    <p id="postalCodeError" class="errorMessage"></p>

                    <div>
                        <input
                            type="checkbox"
                            required
                            name="terms"
                            id="checkBoxOne"
                            class="checkBoxes"
                        />
                        <label for="checkBoxOne"
                            >By checking this box you agree to accept the rules
                            and regulations of the game. Please
                            <a href="#"> CLICK HERE</a> to view the rules and
                            consent form.</label
                        >
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="terms"
                            id="checkBoxTwo"
                            class="checkBoxes"
                        />
                        <label for="checkBoxTwo"
                            >By checking this box, you accept to receive mail
                            notifications regarding the products, sponsors and
                            other communications.
                        </label>
                    </div>
                    <input
                        type="submit"
                        id="submitButton"
                        class="button"
                        value="SUBMIT"
                        onclick="return validate()"
                    />
                </form>
            </section>
            <Footer/>
        </main>
        

    
    )
}

export default withRouter(NameForm);