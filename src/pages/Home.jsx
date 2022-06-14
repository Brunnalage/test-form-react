import styled from 'styled-components';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Header } from '../components/header/header'; 
import InputField from '../components/InputField';

export const GlobalStyle = createGlobalStyle`
   html, body{ box-sizing: border-box;
    margin: 0;
    padding: 0;background: #E5E5E5;
    font-family: 'Nunito', sans-serif;
    height: 100vh;
  }
  `
const Box = styled.div`
 background: #ffffff;
    display: block;
    max-width: 38.75em;
    height: 47.5em;
    margin: 1.5% auto;
    border-radius: 1.5em;
    padding: 4%;     
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
`

export function Home() { 

  return (           
    <Box>
    <Header />   
     <Form>     
        <InputField value="Name" label="Full Name*" type="text"/>
        <InputField value="Email" label="Email*" type="email"/>
        <InputField value="Phone" label="Phone" type="tel"/>
        <InputField value="Password" label="Password*" type="password"/>
        <InputField value="Birthdate" label="Birthdate*" type="date"/>
     </Form>
    </Box>    
  )
}

