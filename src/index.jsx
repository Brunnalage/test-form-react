import React from 'react'
import ReactDOM from 'react-dom/client'
import { BoxStyle, GlobalStyle } from './index.styled';
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>        
    <GlobalStyle />
    <BoxStyle>    
      <App /> 
    </BoxStyle>
  </React.StrictMode>
)
