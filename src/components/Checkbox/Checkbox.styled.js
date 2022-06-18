import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: block;
  font-size: 1em; 
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);    
  color:#111111;       
  align-self: center;           
`;

export const Checkboxlabel = styled.label`
  display:flex;        
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden; 
  white-space: nowrap;width: 1px;
  height: 1px;
  margin: -2px;
  padding: 0;   
`;

export const Text = styled.label`
  display:flex;
cursor: pointer; 
`;

export const StyledCheckbox = styled.label` 
  display: flex;
  width: 20px;
  height: 20px;
  border-radius:2px;  
  margin-right: 6px;  
  background:#AAAAAA; 
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  img {
    display: ${props => props.checked ? 'flex' : 'none'};
    background-color: #0DBDBD;
  }   
`;

export const Check = styled.img`
  width: 20px;
  border-radius:2px;
`;

export const Error = styled.p`
  display: block;
  color: #ff8e8e;
  font-size: 0.825em;   
  align-items: top; 
 `;