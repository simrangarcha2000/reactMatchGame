import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../redux/";

const useForm = (validateInfo, direction) => {
    const dispatcher = useDispatch();

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        address2: "",
        phone: "",
        DateOfBirth: "",
        city: "",
        province: "",
        postalCode: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateInfo(values));
        console.log("ERRORS", validateInfo(values));
        if (Object.keys(validateInfo(values)).length === 0) {
            console.log(values);
            dispatcher(
                updateName({
                    username: values.firstName + " " + values.lastName,
                })
            );
            direction();
        }
    };

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
