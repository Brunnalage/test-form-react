import React from 'react';
import { FormRegister } from './Form.styled';
import InputField from '../Inputs/Inputs';
import Checkbox from '../Checkbox/checkbox';
import Button from '../Button/Button';
import useForm from '../../utils/Hooks/useForm';

export const Form = () => {
    const name = useForm('fullName');
    const email = useForm('email');
    const phone = useForm('phone');
    const password = useForm('password');
    const birthDate = useForm('birthDate');


    function handleSubmit(event) {
        event.preventDefault();
        if (name.validate() && (email.validate()) && (phone.validate()) && (password.validate()) && (birthDate.validate())) {
            console.log('enviou')
        } else {
            console.log('naoenviar')
            console.log(birthDate.value)
        }
    }
    return (
        <FormRegister onSubmit={handleSubmit}>
            <InputField placeholder="Name" label="Full Name*" type="text" {...name} />
            <InputField placeholder="Email" label="Email*" type="email" {...email} />
            <InputField placeholder="Phone" label="Phone*" type="tel" {...phone} />
            <InputField placeholder="Password" label="Password*" type="password" {...password} />
            <InputField placeholder="Birthdate" label="Birthdate*" type="date" {...birthDate} />
            <Checkbox />
            <Button title="Register" />
        </FormRegister>
    )
};
