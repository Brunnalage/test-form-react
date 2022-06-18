import styled from 'styled-components';

export const HeaderWrappper = styled.div`
    grid-area: header;
    display: grid;

    &.home{
    grid-gap: 0.5em;
    grid-template-columns: auto;
    grid-template-rows: auto auto;  
    height: 30%;
    align-items: center;
    justify-content: center;
    }
    &.success{
    grid-gap: 3em;
    height: 50%;       
    align-content: center; 
    }
`

export const HeaderImage = styled.img`
    margin: 0 auto;
    display: block;
`;

export const Title = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 2.25em;
    text-align: center;
    color:#111111;
    margin-bottom: 0.5em;
`;

