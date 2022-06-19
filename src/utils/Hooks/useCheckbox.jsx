import React from 'react';

const validator = {
    checkbox: {
        message: 'You must accept the terms',
    }
}


const useCheckbox = (type) => {
    const [checked, setChecked] = React.useState(false);
    const [error, setError] = React.useState(null);

    function validate(checked) {       
        if (validator[type] && (checked ==false)){
         setError(validator[type].message)
            return false;
    } else {
        setError(null);
        return true;
    }
    }

    const onChange= (e) =>{
        if (error) validate(e.target.checked);
        setChecked(e.target.checked);
    }

    return {
        checked,
        setChecked,
        error,
        onChange,     
        onBlur: () => validate(checked),          
        validate: () => validate(checked),
    };
};

export default useCheckbox;