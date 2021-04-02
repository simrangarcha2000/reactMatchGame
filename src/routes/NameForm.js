import { withRouter } from "react-router-dom";
import logo from "../images/logo.svg";
import Footer from "../components/Footer";
import MobileFormHeader from "../components/MobileFormHeader";
import FormDesktopSide from "../components/FormDesktopSide";
import useForm from "../util/useForm";
import validateInfo from "../util/validateInfo";
import { Link } from "react-router-dom";

function NameForm(props, { submitForm }) {
    function goToThanks() {
        console.log("Thanks");
        props.history.push("/Thanks");
    }

    const { handleChange, handleSubmit, values, errors } = useForm(
        validateInfo,
        goToThanks
    );

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

                <form id="registerForm" onSubmit={handleSubmit}>
                    <h1>JOIN THE BUY MORE FAMILY</h1>
                    <div className="desktopOneLine">
                        <div>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={values.firstName}
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            {errors.lastName && <p>{errors.lastName}</p>}
                        </div>
                    </div>

                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Mobile Phone"
                        minLength="10"
                        value={values.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        minLength="8"
                    />
                    {errors.password && <p>{errors.password}</p>}

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        minLength="8"
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                    <input
                        id="DateOfBirth"
                        type="date"
                        name="DateOfBirth"
                        placeholder="Date of Birth"
                        value={values.DateOfBirth}
                        onChange={handleChange}
                    />
                    {errors.DateOfBirth && <p>{errors.DateOfBirth}</p>}

                    <div className="line"></div>

                    <input
                        type="text"
                        id="address"
                        placeholder="Address Line 1"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                    />

                    {errors.address && <p>{errors.address}</p>}

                    <input
                        type="text"
                        id="address2"
                        name="address2"
                        placeholder="Address Line 2"
                        value={values.address2}
                        onChange={handleChange}
                    />
                    {errors.address2 && <p>{errors.address2}</p>}

                    <div className="desktopOneLine">
                        <div>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                value={values.city}
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                        onChange={handleChange}
                    />
                    {errors.postalCode && <p>{errors.postalCode}</p>}

                    <div className="checkBoxOneLine">
                        <input
                            type="checkbox"
                            name="terms"
                            id="checkBoxOne"
                            className="checkBoxes"
                        />
                        <label htmlFor="checkBoxOne">
                            <p>
                                By checking this box you agree to accept the
                                rules and regulations of the game. Please
                                <Link to="/legal">CLICK HERE</Link> to view the
                                rules and consent form.
                            </p>
                        </label>
                    </div>
                    <div className="checkBoxOneLine">
                        <input type="checkbox" name="terms" id="checkBoxTwo" />
                        <label htmlFor="checkBoxTwo">
                            <p>
                                By checking this box, you accept to receive mail
                                notifications regarding the products, sponsors
                                and other communications.
                            </p>
                        </label>
                    </div>
                    <input type="submit" id="submitButton" value="SUBMIT" />
                </form>
            </section>
            <Footer />
        </main>
    );
}

export default withRouter(NameForm);
