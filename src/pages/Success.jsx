import styled from 'styled-components';
import React from 'react';
import Box from '../components/Box/Box';
import { Header } from '../components/Header/Header'; 
import  Button  from '../components/Button/Button';

const MainSuccess = styled.div`
grid-area: main;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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