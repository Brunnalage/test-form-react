import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../img/expand_more_black_24dp.svg"

const Label = styled.label`        
    font-size: 0.875em; 
    display:block;
    color:#767676; 
`
const Input = styled.input`
  box-sizing: border-box;
    font-size: 1em;    
    padding: 0.5em;
    border: 2px solid #AAAAAA;
    border-radius: 0.25em;     
    width: 100%;
    flex: auto;
    margin: 0 auto;
    height: 2.5em;    
    font-family: 'Nunito', sans-serif;
    color:#767676;
`

export const FormInfo = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 20% 50% 20%;
    align-items: center;
    &:first-child {
    grid-column: 1/3;
    grid-row: 1/1;
    } 
    &:nth-child(5) {
     input[type="date"]::-webkit-calendar-picker-indicator {          
    background: url(${arrow}) no-repeat; }    
     }  
`

export const Error = styled.span`
    color: #ff8e8e;
    font-size: 0.825em;   
    align-items: top; 
`;

const InputField = ({ value, label, placeholder, type, onChange, onBlur, error }) => { 
    return (
      <FormInfo>
        <Label htmlFor="input-field">{label}</Label>
        <Input value={value} placeholder={placeholder} type={type} onChange={onChange} onBlur={onBlur}/>
        {error && <Error>{error}</Error>}
      </FormInfo>
    )
  };
  


/*const InputField = () => {
    const [name, setName] = React.useState('');

    return (
        <div>
            <label htmlFor=""></label>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
    )
    }/*/
export default InputField;