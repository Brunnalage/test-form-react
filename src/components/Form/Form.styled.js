import styled from 'styled-components';

export const FormRegister = styled.form`
    grid-area: main;    
    height: calc(760px - 30%);    
    display: grid;
    grid-gap: 1em;
    grid-template-columns: calc(70% - 1em) 30%;    
    grid-template-rows: 20% 20% 20% 40%;
    justify-content: space-between;
    flex-wrap: wrap;   

    @media (max-width: 768px) {
    display:grid;
    grid-template-columns: 50% 50%;    
    grid-template-rows: 12.5% 12.5% 12.5% 12.5% 10% 10% 25%;
    } 
    `;
