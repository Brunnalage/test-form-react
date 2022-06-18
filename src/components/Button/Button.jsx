import React from 'react';
import { FormButton } from './Button.Styled';

const Button = ({ title }) => {

    return (
        <FormButton type="submit">{title}</FormButton>
    )
};

export default Button;