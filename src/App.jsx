import React from 'react';
import { GlobalStyle } from './App.styled';
import { Home } from './pages/Home'
import { Success } from './pages/Success';


export function App() {
    return (
        <>
            <GlobalStyle />
            <Home />
            <Success />
        </>
    )
}
