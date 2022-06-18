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
        if (validator[type] &&!checked) {
            setError(validator[type].message)
            return true;
        } else {
            setError(null);
            return false;
        }
    }

    function onChange({ event }) {
        if (error) validate(event.target.checked);
        setChecked(event.target.checked);
    }

    return {
        checked,
        setChecked,
        error,
        onChange,               
        validate: () => validate(checked),
    };
};

export default useCheckbox;