import React from 'react';
import {SignInContainer} from './sign-in.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custon-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})

        } catch(error){
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }


    render(){
        return(
        <SignInContainer>
            <h2>I already have an account</h2>
            <span> Sign in with your email and password.</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    label="Email"
                    required />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required />
                    
                <CustomButton type='submit'> Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>

            </form>

        </SignInContainer>
        )}
}

export default SignIn;
