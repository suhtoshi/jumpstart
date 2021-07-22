import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.component';

const AffirmationPage = () =>(
  <div>
    <h1>Affirmations</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/affirmations' component={AffirmationPage} />
      </Switch>
    </div>
  );
}

export default App;
