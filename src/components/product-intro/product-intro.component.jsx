import React from 'react';
import {ProductWelcomeCard, ProductWelcomeTitle, ProductWelcomeText, ExploreButton} from './product-intro.styles'


const ProductIntro = () => (
    <ProductWelcomeCard>
        <ProductWelcomeTitle>
            Welcome to Jumpstart
        </ProductWelcomeTitle>
        <ProductWelcomeText>
            Jumpstart is an online dashboard built to start your day on the right track.<br></br>
            Track daily affirmations, focused work objectives, and guided work sessions to maximize productivity.
        </ProductWelcomeText>
        <ExploreButton type='button'>Explore Jumpstart</ExploreButton>
    </ProductWelcomeCard>
)

export default ProductIntro;