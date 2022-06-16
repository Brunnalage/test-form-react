import styled from 'styled-components';
import React from 'react';
import InputField from '../components/InputField';
import Checkbox from '../components/checkbox';
import Button from '../components/Button';

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

export const Form= () => {

    
      function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
      }
return (
    <FormRegister onSubmit = {handleSubmit}>     
    <InputField id="name" name="" placeholder="Name" label="Full Name*" type="text"/>
    <InputField placeholder="Email" label="Email*" type="email"/>
    <InputField placeholder="Phone" label="Phone" type="tel"/>
    <InputField placeholder="Password" label="Password*" type="password"/>
    <InputField placeholder="Birthdate" label="Birthdate*" type="date"/>
    <Checkbox />
    <Button title="Register"/>
 </FormRegister>
)

}

/*    const handleChange = (e) => {
        const { value } = e.target;
        onChange = { value };
      }*/