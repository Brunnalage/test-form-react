import styled from "styled-components";

export const FormButton = styled.button`
    width: 81px;
    height: 40px;
    border-radius: 8px;
    background: #0DBDBD;
    border-color: transparent;
    color:white;
    font-size: 1em;
    font-family: 'Nunito', sans-serif;  
    margin-left: auto;     
    align-self: center;
    cursor: pointer;
    @media (max-width: 768px) {
    width: calc(100% - 1em);
    margin: 0;
    }
`;
