import React from 'react';
import { FormButton } from './Button.Styled';
import { FormInfo } from '../Inputs/Inputs.styled';

const Button = ({ title, type }) => {

    return (
        <FormInfo>
            <FormButton className={`${type}`} type={type}>{title}</FormButton>
        </FormInfo>
    )
};

export default Button;