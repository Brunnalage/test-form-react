import React, { useState } from "react";
import styled from "styled-components";
import CheckIcon from "../img/checkIcon.svg"

export const CheckboxContainer = styled.div`
 display: flex;
 font-size: 1em; 
 text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);    
 color:#111111;       
 align-self: center;  
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -2px;
   padding: 0;
`;

export const Text = styled.label`
`;

export const StyledCheckbox = styled.label` 
 width: 20px;
 height: 20px;
 border-radius:2px;  
 margin-right: 6px;  
 background:#AAAAAA;
 display: flex;
 justify-content: center;
 align-items: center;
 box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

 img {
      display: ${props => props.checked ? 'flex' : 'none'};
      background-color: #0DBDBD;
    }   
`;

const Check = styled.img`
width: 20px;
border-radius:2px;
`;

const Checkbox = () => {
    const [checked, setChecked] = React.useState(false);

    function handleCheckboxChange() {
        setChecked(!checked);
    }
    return (
        <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
            <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
            <StyledCheckbox checked={checked}><Check alt="tick icon" src={CheckIcon} />
            </StyledCheckbox>
            <Text>I accept the terms and privacy</Text>
        </CheckboxContainer>
    )
};

export default Checkbox;

/* <input type="checkbox" value="terms" checked={terms} onChange={({ target }) => setTerms(target.checked)} /> */

















