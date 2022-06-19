import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   html, body{ box-sizing: border-box;
    margin: 0;
    padding: 0;background: #E5E5E5;
    font-family: 'Nunito', sans-serif;
    height: 100vh;
  }
  @media (max-width: 768px) {
    html, body {
        background: white;
    }
}
 `;

export const BoxStyle = styled.div`

background: #ffffff;
display: block;
max-width: 38.75em;
height: 47.5em;
margin: 1.5% auto;
border-radius: 1.5em;
padding: 4%;     
@media (max-width: 768px) {   
max-width: 100vh;
border-radius: 0px;
}
`;
