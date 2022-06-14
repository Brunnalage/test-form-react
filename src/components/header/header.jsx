import styled from 'styled-components';
import headerImage from "./pictureData.png"

const HeaderHome =  styled.div`
    grid-area: header;
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: auto;
    grid-template-rows: auto auto;  
    height: 30%;
    align-items: center;
    justify-content: center;
`

const HeaderImage = styled.img`
 margin: 0 auto;
   display: block;
`

const Title = styled.h1`
 font-family: 'Inter', sans-serif;
 font-size: 2.25em;
 text-align: center;
 color:#111111;
 margin-bottom: 0.5em;
`

export function Header(){
    return(
        <HeaderHome>
            <HeaderImage src={headerImage} alt="
connected clouds"></HeaderImage>
            <Title>Intern Sign Up</Title>
        </HeaderHome>
    )
}