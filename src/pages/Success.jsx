import React from 'react';
import { Header } from '../components/Header/Header'; 
import  Button  from '../components/Button/Button';
import { MainSuccess } from './Success.styled';
import { Login } from './Success.styled';
import {Link} from 'react-router-dom'
import { StyledLink } from './Success.styled';


export function Success(){
return(
    
      <Login>
      <Header type="success" title="Success!"/>      
      <MainSuccess>     
      < StyledLink to="/"><Button type="button" title="Go Back!"/></ StyledLink>
      </MainSuccess>
      </Login>
    
)
}