export default function validateInfo(values){

    let errors = {}

    if(!values.firstName){
        errors.firstName = "firstName required"
    } else if (!/^[a-zA-z]+$/.test(values.firstName)){

        errors.firstName = 'first name is invalid'
    }

    // lastName

    if(!values.lastName){
        errors.lastName = "lastName required"
    } else if (!/^[a-zA-z]+$/.test(values.lastName)){

        errors.lastName = 'last name is invalids'
    }

    // email

    if(!values.email){
        errors.email = " email required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)){
        
        errors.email = 'Email address is invalid'
    }

    // password

    if(!values.password){
        errors.password = " password required"
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,16}$/.test(values.password)){
        
        errors.password = 'Password is invalid'
    }

    // confirm password 

    if(!values.confirmPassword){
        errors.confirmPassword = " confirmPassword required"
    } else if (values.confirmPassword !== values.password){
        
        errors.confirmPassword = 'Password is invalid'
    }

    // phone

    if(!values.phone){
        errors.phone = "phone required"
    } else if (!/^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$/.test(values.phone)){

        errors.phone = 'phone number is invalid'
    }

    // DateOfBirth

    if(!values.DateOfBirth){
        errors.DateOfBirth = "DateOfBirth required"
    } else if(!/^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/.test(values.DateOfBirth)){

        errors.DateOfBirth = 'Date Of Birth is invalid'
    }

    // address

    if(!values.address){
        errors.address = "address line 1 required"
    } else if (!/^\d+\s[A-z]+(\s[A-z]+$)?/.test(values.address)) {

        errors.address = 'address is invalid'
    }

    // address2

    if(!values.address2){
        errors.address2 = "address line 2 required"
    } else if (!/^\d+\s[A-z]+(\s[A-z]+$)?/.test(values.address2)) {

        errors.address2 = 'address is invalid'
    }

    // city

    if(!values.city){
        errors.city = "city required"
    } else if (!/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(values.city)){

        errors.city = 'city name is invalid'
    }

    // province

    if(!values.province){
        errors.province = "province required"
    } else if (!/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(values.province)){

        errors.province ='province name is invalid'
    }

    // postal

    if(!values.postalCode){
        errors.postalCode = "postalCode required"
    } else if (!/^([A-Za-z]\d[A-Za-z][-\s]?\d[A-Za-z]\d)$/.test(values.postalCode)){

        errors.postalCode = 'postal code is invalid'
    }

    return errors;

}