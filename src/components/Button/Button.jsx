import React from 'react';
import { FormButton } from './Button.Styled';
import { FormInfo } from '../Inputs/Inputs.styled';

const Button = ({ title }) => {

    return (
        <FormInfo>
        <FormButton type="submit">{title}</FormButton>
        </FormInfo>
    )
};

export default Button;