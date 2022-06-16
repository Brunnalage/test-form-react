import React from 'react';
import styled from "styled-components";

const LargeButtonStyle = styled.button`
width: 272px;
    height: 176px;
    border-radius: 8px;
    background: #0DBDBD;
    border-color:transparent;   
    font-size: 2.25em;
    color:white;  
    cursor: pointer;   
`;

export const ButtonLarge = ({title}) => {
 return(
    <LargeButtonStyle type="button">{title}</LargeButtonStyle>
 )
}