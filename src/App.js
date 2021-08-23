import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.component';
import AffirmationPage from './pages/affirmations-page/affirmationspage.component';
import PreparePage from './pages/prepare-page/prepare-page.component';
import DistractionsPage from './pages/distractions-page/distractions-page.component';
import BrainstormPage from './pages/brainstorm-page/brainstorm-page.component';
import JumpstartPage from './pages/jumpstart-page/jumpstart-page.component';
import Header from './components/header/header.component';
import SignUpSignInPage from './pages/signup-signin-page/signup-signin.component';
import ContactPage from './pages/contact-page/contact.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

          console.log(this.state)
        });
      }
      else{
        this.setState({currentUser: userAuth});
      }
    })
  }  

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render( ){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/affirmations' component={AffirmationPage} />
          <Route exact path='/prepare' component={PreparePage} />
          <Route exact path='/distractions' component={DistractionsPage} />
          <Route exact path='/brainstorm' component={BrainstormPage} />
          <Route exact path='/what-is-jumpstart' component={JumpstartPage} />
          <Route exact path='/signin' component={SignUpSignInPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
