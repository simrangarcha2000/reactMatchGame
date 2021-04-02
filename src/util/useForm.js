import { useState } from "react";

const useForm = (validateInfo, direction) => {
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
            direction();
        }
    };

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;
