import headerImage from "../../img/pictureData.png";
import { HeaderImage } from './Header.styled';
import { Title } from './Header.styled';
import { HeaderWrappper } from "./Header.styled";

export function Header({ title, type }) {
    return (
        <HeaderWrappper className={`${type}`} type={(type)}>
            <HeaderImage src={headerImage} alt=" connected clouds"></HeaderImage>
            <Title>{title}</Title>
        </HeaderWrappper>
    )
};
