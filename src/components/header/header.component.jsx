import React from 'react';
import {HeaderContainer, OptionsContainer, Options, HeaderText, LogoContainer} from './header.styles.jsx';
import { ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'


const Header = ({currentUser}) => (
    <HeaderContainer>
    <LogoContainer to ='/'>
        <Logo/>
    </LogoContainer>
    <HeaderText></HeaderText>
    <OptionsContainer>
        <Options to='/what-is-jumpstart'>Explore</Options>
        <Options to='/contact'>Contact</Options>
        {
            currentUser ? (
                <Options as='div' onClick={()=> auth.signOut()}>
                    Sign Out
                </Options>
            ):(
                <Options to='/signin'>
                    Sign In
                </Options>
            )}
        {/* <Options to='/signin'>Sign Up</Options> */}
    </OptionsContainer>
    </HeaderContainer>
);

export default Header;