import React from 'react';
import Header from '../../components/header/header.component';
import {AffirmationsPageContainer} from './affirmationspage.styles'


const AffirmationPage = () =>(
    <AffirmationsPageContainer>
        <Header/>
      <h1>Affirmations</h1>
    </AffirmationsPageContainer>
  )

export default AffirmationPage;