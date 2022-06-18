import styled from "styled-components";

export const FormButton = styled.button`
    
    border-radius: 8px;
    background: #0DBDBD;
    border-color: transparent;
    color:white;    
    font-family: 'Nunito', sans-serif;      
    cursor: pointer;   

    &.submit {
    width: 81px;
    height: 40px;
    font-size: 1em;
    margin-left: auto;     
    align-self: center;
    @media (max-width: 768px) {
    width: calc(100% - 1em);
    margin: 0; 
    }
    }

    &.button{
    width: 272px;
    height: 176px;
    font-size: 2.25em;
    }
`;
