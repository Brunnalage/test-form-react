import React from "react";
import { FormInfo } from "./Inputs.styled";
import { LabelWrapper } from "./Inputs.styled";
import { InputWrapper } from "./Inputs.styled";
import { Error } from "./Inputs.styled";

export const InputField = ({ value, label, placeholder, type, onChange, onBlur, error }) => {
  return (
    <FormInfo>
      <LabelWrapper htmlFor="input-field">{label}</LabelWrapper>
      <InputWrapper value={value} placeholder={placeholder} type={type} onChange={onChange} onBlur={onBlur} />
      {error && <Error>{error}</Error>}
    </FormInfo>
  )
};

