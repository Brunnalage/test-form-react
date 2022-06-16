import React from 'react';
import {Home} from './pages/Home'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   html, body{ box-sizing: border-box;
    margin: 0;
    padding: 0;background: #E5E5E5;
    font-family: 'Nunito', sans-serif;
    height: 100vh;
  }
   `


export function App (){
    return(
        <>
        <GlobalStyle />
        <Home />
        </>
    )
}
