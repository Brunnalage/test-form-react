
import React from 'react';
import Box from '../components/Box/Box';
import { Header } from '../components/Header/Header'; 
import  Button  from '../components/Button/Button';
import { MainSuccess } from './Success.styled';

export function Success(){
return(
    <Box>
      <Header type="success" title="Success!"/>      
      <MainSuccess>
      <Button type="button" title="Go Back!"/>
      </MainSuccess>
    </Box>
)
}