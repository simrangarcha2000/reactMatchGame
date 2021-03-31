import {withRouter} from 'react-router-dom';
import logo from './images/logo.svg';
import Footer from './components/Footer';
import MobileFormHeader from './components/MobileFormHeader';
import FormDesktopSide from './components/FormDesktopSide';
import useForm from './components/useForm';
import validateInfo from './validateInfo';




function NameForm(props ,{submitForm}){
    function goToThanks(e){
        e.preventDefault();
        console.log("Thanks");
        props.history.push('/Thanks');
    }

    const {handleChange2 , handleSubmit ,values ,errors } = useForm(validateInfo);

    return (
        <main>
            <header>
                <MobileFormHeader/>
                <img  id = "buyMoreDollarsLogo" src={logo} alt = "Logo Buy More Dollars "/>
            </header>
            <section id="formPageElements">
                <FormDesktopSide/>

               
                <form id="registerForm" onSubmit={handleSubmit}>
                    <h1>JOIN THE BUY MORE FAMILY</h1>
                    <div>
                        <div>
                            <input
                                
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={values.firstName}
                                onChange={handleChange2}
                                
                                
                            />
                            {errors.firstName && <p>{errors.firstName}</p>}
                        </div>

                        <div>
                            <input
                                
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={handleChange2}
                                
                                
                            />
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                    </div>

                    <input
                        
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Mobile Phone"
                        minlength="10"
                        value={values.phone}
                        onChange={handleChange2}
                        
                    />
                    {errors.phone && <p>{errors.phone}</p>}

                    <input
                        
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={values.email}
                        onChange={handleChange2}
                        
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange2}
                        minlength="8"
                        

                    />
                    {errors.password && <p>{errors.password}</p>}

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange2}
                        minlength="8"
                        
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                    <input
                        
                        id="DateOfBirth"
                        type="date"
                        name="DateOfBirth"
                        placeholder="Date of Birth"
                        value={values.DateOfBirth}
                        onChange={handleChange2}
                        
                    />
                    {errors.DateOfBirth && <p>{errors.DateOfBirth}</p>}

                    <div class="line"></div>

                    <input
                        
                        type="text"
                        id="address"
                        placeholder="Address Line 1"
                        name="address"
                        value={values.address}
                        onChange={handleChange2}
                        
                        
                    />
                    
                    {errors.address && <p>{errors.address}</p>}

                    <input
                        
                        type="text"
                        id="address2"
                        name="address2"
                        placeholder="Address Line 2"
                        value={values.address2}
                        onChange={handleChange2}
                    />
                    {errors.address2 && <p>{errors.address2}</p>}

                    <div >
                        <div>
                            <input
                                
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                value={values.city}
                                onChange={handleChange2}
                                
                            />
                            {errors.city && <p>{errors.city}</p>}

                        </div>
                        <div>
                            <input
                                
                                type="text"
                                id="province"
                                name="province"
                                placeholder="Province"
                                value={values.province}
                                onChange={handleChange2}
                                
                            />
                             {errors.province && <p>{errors.province}</p>}
                        </div>
                    </div>

                    <input
                        
                        type="text"
                        id="postalCode"
                        placeholder="PostalCode"
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleChange2}
                        
                    />
                    {errors.postalCode && <p>{errors.postalCode}</p>}

                    <div>
                        <input
                            type="checkbox"
                            
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