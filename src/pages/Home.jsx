import styled from 'styled-components';
import React from 'react';
import { Header } from '../components/header/header'; 
import InputField from '../components/InputField';
import Checkbox from '../components/checkbox';
import Button from '../components/Button';
import Box from '../components/Box';

export const HeaderHome =  styled.div`
    grid-area: header;
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: auto;
    grid-template-rows: auto auto;  
    height: 30%;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    grid-area: main;    
    height: calc(760px - 30%);    
    display: grid;
    grid-gap: 1em;
    grid-template-columns: calc(70% - 1em) 30%;    
    grid-template-rows: 20% 20% 20% 40%;
    justify-content: space-between;
    flex-wrap: wrap;   
    `;

export function Home() { 

  const handleChange = (e) => {
    const { value } = e.target;
    onChange={value};     
  }
  
  function handleSubmit(event){
    event.preventDefault();  
    console.log(event);
  } 

  return (               
    <Box>
    <HeaderHome> 
    <Header title="Sign in Up" />  
    </HeaderHome> 
     <Form onSubmit = {handleSubmit}>     
        <InputField id="name" name="" placeholder="Name" label="Full Name*" type="text" onChange={handleChange}/>
        <InputField placeholder="Email" label="Email*" type="email" onChange={handleChange}/>
        <InputField placeholder="Phone" label="Phone" type="tel" onChange={handleChange}/>
        <InputField placeholder="Password" label="Password*" type="password" onChange={handleChange}/>
        <InputField placeholder="Birthdate" label="Birthdate*" type="date" onChange={handleChange}/>
        <Checkbox />
        <Button title="Register"/>
     </Form>
     </Box>
  )
}

