import styled from 'styled-components';
import React from 'react';
import { Header } from '../components/header/header';
import { Form } from '../components/Form';
import Box from '../components/Box';

export const HeaderHome = styled.div`
    grid-area: header;
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: auto;
    grid-template-rows: auto auto;  
    height: 30%;
    align-items: center;
    justify-content: center;
`



export function Home() {
  
  return (
    <Box>
      <HeaderHome>
        <Header title="Sign in Up" />
      </HeaderHome>
      <Form />
    </Box>
  )
}

