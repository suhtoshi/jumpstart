import React from 'react';
import IntroCard from '../../components/intro-card/intro-card.component';
import ProductIntro from '../../components/product-intro/product-intro.component';
import {HomePageContainer} from './home-page.styles'
import GetStarted from '../../components/get-started/get-started.component';
import InfoSection from '../../components/info-section/info-section.component';

const HomePage = () => (
    <div className = 'homepage'>
    <HomePageContainer>
        <IntroCard/>
        <ProductIntro/>
        <GetStarted/>
        <InfoSection route="what-is-jumpstart" header="What is Jumpstart?" info="Jumpstart is a dashboard you start your day on. Before starting your workday, start with a plan mentally and physically. We need a place to gather our thoughts before jumping straight to work without a plan." text="Explore Jumpstart" />
    </HomePageContainer>
    </div>
)

export default HomePage;