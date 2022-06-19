import React from 'react'

const validator = {
    fullName: {
        regex: /(^[A-Za-z]{4,})([ ]{1})([A-Za-z])/,
        message: 'Full name invalid',    
    },
    email: {
        regex:/^[\w.-]+@[\w-]+\.[\w.-]+$/,
        message: 'Email invalid'
    },
    phone:{
        regex:/^\(?([0-9]{2})\)?[-.]?([0-9]{5})[-. ]?([0-9]{4})$/,
        message: 'Phone invalid'
    },
    password: {
        regex: /^(?=.*[0-9])(?!.*[ !@#%^&*_=+-])(?!.*[a-zA-z]).{6,9}$/,
        message: 'Password invalid'
    },
    birthDate: {
        regex:/^((?:19|20)\d{2})\s*\-(1[012]|0?[1-9])\-\s*(3[01]|[12][0-9]|0?[1-9])/,
        message: 'Birthdate invalid'
    },
    checkbox: {        
        message: 'You must accept the terms'
    }
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (validator[type] && !validator[type].regex.test(value)) {
            setError(validator[type].message)   
            return false;         
        } else {
            setError(null);
            return true;
        }
    } 
   

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }
    return {
        value,
        setValue,
        error,
        onChange,       
        onBlur: () => validate(value),
        validate: () => validate(value),       

    };
};

export default useForm;