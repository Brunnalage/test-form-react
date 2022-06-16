import styled from 'styled-components';
import headerImage from "./pictureData.png"

export const HeaderImage = styled.img`
 margin: 0 auto;
   display: block;
`

export const Title = styled.h1`
 font-family: 'Inter', sans-serif;
 font-size: 2.25em;
 text-align: center;
 color:#111111;
 margin-bottom: 0.5em;
`

export function Header({title}) {
    return (
        <>
         <HeaderImage src={headerImage} alt=" connected clouds"></HeaderImage>
         <Title>{title}</Title>
        </>
    )
}