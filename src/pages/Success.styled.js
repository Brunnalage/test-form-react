
import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Login = styled.div`
height: 100%;

 @media (max-width: 768px) {
    margin: 40% auto;
 }
`;

export const MainSuccess = styled.div`
grid-area: main;
    height: 45%;   
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;
