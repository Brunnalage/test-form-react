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

const Checkbox = ({ type, error }) => {
    const [checked, setChecked] = React.useState(false);

    function handleCheckboxChange() {
        setChecked(!checked);
    }
    return (
        <FormInfo>
        <CheckboxContainer checked={checked} onClick={handleCheckboxChange}>
            <Checkboxlabel>
                <StyledCheckbox checked={checked}><Check alt="tick icon" src={CheckIcon} />
                </StyledCheckbox>
                <HiddenCheckbox type={type} onChange={handleCheckboxChange} checked={checked} />
                <Text>I accept the terms and privacy</Text>
            </Checkboxlabel>
            {error && <Error>{error}</Error>}
        </CheckboxContainer>
        </FormInfo>
    )
};

export default Checkbox;



















