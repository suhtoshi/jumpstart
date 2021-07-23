import React from 'react';
import {HeaderContainer, OptionsContainer, Options, HeaderText} from './header.styles.jsx';
import { ReactComponent as Logo} from '../../assets/logo.svg'


const Header = () => (
    <HeaderContainer>
    <Logo to='/'/>
    <HeaderText></HeaderText>
    <OptionsContainer>
        <Options>Sign Up</Options>
    </OptionsContainer>
    </HeaderContainer>
);

export default Header;