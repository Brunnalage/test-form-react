import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: block;
  font-size: 1em; 
  text-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);    
  color:#111111;       
  align-self: center;     
  align-items: center;      
`;

export const Checkmark = styled.input`
width: 20px;
height: 20px;
border-radius:2px;  
accent-color: rgb(0, 164, 180);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
export const Error = styled.p`
  display: block;
  color: #ff8e8e;
  font-size: 0.825em;   
  align-self: start; 
  font-weight: bold;
 `;