import React from 'react';
import Header from '../../components/header/header.component';
import IntroCard from '../../components/intro-card/intro-card.component';
import ProductIntro from '../../components/product-intro/product-intro.component';

const HomePage = () => (
    <div className = 'homepage'>
        <Header/>
        <IntroCard/>
        <ProductIntro/>
    </div>
)

export default HomePage;