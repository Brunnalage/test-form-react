import headerImage from "../../img/pictureData.png";
import { HeaderImage } from './Header.styled';
import { Title } from './Header.styled';

export function Header({ title }) {
    return (
        <>
            <HeaderImage src={headerImage} alt=" connected clouds"></HeaderImage>
            <Title>{title}</Title>
        </>
    )
};