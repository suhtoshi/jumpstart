import React from 'react';
import Header from '../../components/header/header.component';
import IntroCard from '../../components/intro-card/intro-card.component';
import ProductIntro from '../../components/product-intro/product-intro.component';
import {HomePageContainer} from './homepage.styles'

const HomePage = () => (
    <div className = 'homepage'>
    <HomePageContainer>
        <Header/>
        <IntroCard/>
        <ProductIntro/>
    </HomePageContainer>
    </div>
)

export default HomePage;