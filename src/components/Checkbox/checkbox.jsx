import React from "react";
import { CheckboxContainer } from "./Checkbox.styled";
import { Error } from "./Checkbox.styled";
import { FormInfo } from "../Inputs/Inputs.styled";
import { Checkmark } from "./Checkbox.styled";


const Checkbox = ({ type, onChange, checked, error, onBlur }) => {

    return (
        <FormInfo>
            <CheckboxContainer>      
            <Checkmark type={type} onChange={onChange} checked={checked} onBlur={onBlur}/>I accept the terms and privacy         
            </CheckboxContainer>            
            {error && <Error>{error}</Error>}
        </FormInfo>
    )
};

export default Checkbox;






















