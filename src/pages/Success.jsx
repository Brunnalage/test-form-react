import styled from 'styled-components';
import React from 'react';
import Box from '../components/Box';
import { Header } from '../components/header/header'; 
import { ButtonLarge } from '../components/ButtonLarge';

const HeaderSuccess = styled.div`
 grid-area: header;
    display: grid;
    grid-gap: 3em;
    height: 50%;       
    align-content: center;    
`;

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
        <HeaderSuccess>
      <Header title="Success!"/>
      </HeaderSuccess>
      <MainSuccess>
      <ButtonLarge title="Go Back!"/>
      </MainSuccess>
    </Box>
)
}