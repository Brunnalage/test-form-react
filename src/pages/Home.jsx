import React from 'react';
import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import Box from '../components/Box/Box';


export function Home() {
  
  return (
    <Box>      
      <Header type="home" title="Sign in Up" />      
      <Form />
    </Box>
  )
}

