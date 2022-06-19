import React from "react";
import CheckIcon from "../../img/checkIcon.svg"
import { CheckboxContainer } from "./Checkbox.styled";
import { Checkboxlabel } from "./Checkbox.styled";
import { StyledCheckbox } from "./Checkbox.styled";
import { HiddenCheckbox } from "./Checkbox.styled";
import { Check } from "./Checkbox.styled";
import { Text } from "./Checkbox.styled";
import { Error } from "./Checkbox.styled";
import { FormInfo } from "../Inputs/Inputs.styled";


const Checkbox = ({ type, onChange, checked, error, onBlur }) => {

    return (
        <FormInfo>
            <CheckboxContainer>
                 <input type={type} onChange={onChange} checked={checked} onBlur={onBlur}/>I accept the terms and privacy                 
            </CheckboxContainer>            
            {error && <Error>{error}</Error>}
        </FormInfo>
    )
};

export default Checkbox;






















