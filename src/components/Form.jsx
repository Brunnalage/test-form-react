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
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [birthday, setBirthday] = React.useState('');

    
      function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
      }
return (
    <FormRegister onSubmit = {handleSubmit}>     
    <InputField value={name} placeholder="Name" label="Full Name*" type="text" onChange={(event) => setName(event.target.value)}/>  
    <InputField value={email} placeholder="Email" label="Email*" type="email" onChange={(event) => setEmail(event.target.value)}/>
    <InputField value={phone} placeholder="Phone" label="Phone*" type="tel"onChange={(event) => setPhone(event.target.value)}/>
    <InputField value={password} placeholder="Password" label="Password*" type="password" onChange={(event) => setPassword(event.target.value)}/>
    <InputField value={birthday} placeholder="Birthdate" label="Birthdate*" type="date" onChange={(event) => setBirthday(event.target.value)}/>
    <Checkbox />
    <Button title="Register"/>
 </FormRegister>
)

}

/*    const handleChange = (e) => {
        const { value } = e.target;
        onChange = { value };
      }*/