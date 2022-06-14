import styled from 'styled-components';
import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { Header } from '../components/header/header'; 


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

export function Home() { 

  return (    
    <>   
    
    <Box>
    <Header />
    </Box>      
    
    </>
  )
}

