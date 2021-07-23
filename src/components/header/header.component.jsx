import React from 'react';
import {HeaderContainer, OptionsContainer, Options, HeaderText, LogoContainer} from './header.styles.jsx';
import { ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => (
    <HeaderContainer>
    <LogoContainer to ='/'>
        <Logo/>
    </LogoContainer>
    <HeaderText></HeaderText>
    <OptionsContainer>
        <Options>Explore</Options>
        <Options>Contact</Options>
        <Options>Sign Up</Options>
    </OptionsContainer>
    </HeaderContainer>
);

export default Header;