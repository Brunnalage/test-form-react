import styled from 'styled-components';
import React from 'react';
import InputField from '../components/InputField';
import Checkbox from '../components/checkbox';
import Button from '../components/Button';
import useForm from '../utils/Hooks/useForm';

const FormRegister = styled.form`
    grid-area: main;    
    height: calc(760px - 30%);    
    display: grid;
    grid-gap: 1em;
    grid-template-columns: calc(70% - 1em) 30%;    
    grid-template-rows: 20% 20% 20% 40%;
    justify-content: space-between;
    flex-wrap: wrap;   
    `;

export const Form = () => {
    const name = useForm('fullName');
    const email = useForm('email');
    const phone = useForm('phone');
    const password = useForm('password');
    const birthDate = useForm('birthDate');
    

    function handleSubmit(event) {
        event.preventDefault();
        if (name.validate() && (email.validate()) && (phone.validate()) && (password.validate()) && (birthDate.validate())){            
            console.log('enviou')
        }else{
        console.log('naoenviar')      
        console.log(birthDate.value)  
    }
    }
    return (
        <FormRegister onSubmit={handleSubmit}>
            <InputField placeholder="Name" label="Full Name*" type="text" {...name}/>        
            <InputField placeholder="Email" label="Email*" type="email" {...email}/>
            <InputField placeholder="Phone" label="Phone*" type="tel" {...phone} />
            <InputField placeholder="Password" label="Password*" type="password" {...password}/>
            <InputField placeholder="Birthdate" label="Birthdate*" type="date" {...birthDate}/>            
            <Button title="Register" />
            <Checkbox />
        </FormRegister>
    )

}
