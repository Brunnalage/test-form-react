import React from 'react';
import styled from "styled-components";

const FormButton = styled.button`
 width: 81px;
 height: 40px;
 border-radius: 8px;
 background: #0DBDBD;
 border-color: transparent;
 color:white;
 font-size: 1em;
 font-family: 'Nunito', sans-serif;  
 margin-left: auto;     
 align-self: center;
 cursor: pointer;
`;

 const Button = ({title}) => {
   
    return(
        <FormButton type="button">{title}</FormButton>
    )
 }

 export default Button;