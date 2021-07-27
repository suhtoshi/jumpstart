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

function App() {
  return (
    <div>
    <Header/>
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

export default App;
