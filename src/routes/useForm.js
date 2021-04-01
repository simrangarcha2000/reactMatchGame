import {useState , useEffect} from 'react'

const useForm = (validateInfo) => {

        const [values ,setValues] = useState({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:'',
            address:'',
            address2:'',
            phone:'',
            DateOfBirth:'',
            city:'',
            province:'',
            postalCode:''
        })

        const [errors, setErrors] = useState({})
        

        const handleChange2 = e => {
            const {name , value} = e.target;

            setValues({
                ...values,
                [name]:value
            });
        };
         
        const handleSubmit = e => {
            e.preventDefault();

            setErrors(validateInfo(values));
            

            
        };


        return{handleChange2,values,handleSubmit,errors};
};

        export default useForm;