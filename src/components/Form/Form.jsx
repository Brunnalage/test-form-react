import React from 'react';
import { FormRegister } from './Form.styled';
import { InputField } from '../Inputs/Inputs';
import Checkbox from '../Checkbox/checkbox';
import Button from '../Button/Button';
import useForm from '../../utils/Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import useCheckbox from '../../utils/Hooks/useCheckbox';

export const Form = () => {
    const name = useForm('fullName');
    const email = useForm('email');
    const phone = useForm('phone');
    const password = useForm('password');
    const birthDate = useForm('birthDate');
    const checkbox = useCheckbox('checkbox');
    const navigateTo = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        if (name.validate() && (email.validate()) && (phone.validate()) && (password.validate()) && (birthDate.validate()) && (checkbox.validate())) {
            navigateTo('/Success');
        }
    }

    return (
        <FormRegister onSubmit={handleSubmit}>
            <InputField placeholder="Name" label="Full Name*" type="text" {...name} />
            <InputField placeholder="Email" label="Email*" type="email" {...email} />
            <InputField placeholder="Phone" label="Phone*" type="tel" {...phone} />
            <InputField placeholder="Password" label="Password*" type="password" {...password} />
            <InputField placeholder="Birthdate" label="Birthdate*" type="date" {...birthDate} />
            <Checkbox type="checkbox" {...checkbox} />
            <Button type="submit" title="Register" onClick={handleSubmit} />
        </FormRegister>
    )
};
