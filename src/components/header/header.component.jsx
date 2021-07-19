import React from 'react';
import {HeaderContainer, OptionsContainer, Options} from './header.styles.jsx';
import { ReactComponent as Logo} from '../../assets/logo.svg'


const Header = () => (
    <HeaderContainer>
    <Logo/>
        <OptionsContainer>
            <Options>Sign Up</Options>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;