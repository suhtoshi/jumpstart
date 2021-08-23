import React from 'react';
import {SignUpSignInPageContainer} from './signup-signin.styles'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignUpSignInPage = () => (
    <SignUpSignInPageContainer>
        <SignIn/>
        <SignUp/>
    </SignUpSignInPageContainer>
)

export default SignUpSignInPage;