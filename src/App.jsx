import React from 'react';
import { GlobalStyle } from './App.styled';
import { Home } from './pages/Home'
import { Success } from './pages/Success';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export function App() {

    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                <Route path='/' element={<Home />}/>  
                <Route path='Success' element= {<Success />}/>                              
                </Routes>
            </Router>
        </>
    )
}
