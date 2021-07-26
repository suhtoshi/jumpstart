import React from 'react';
import {ProductWelcomeCard, ProductWelcomeTitle, ProductWelcomeText, ExploreButton} from './product-intro.styles'


const ProductIntro = () => (
    <ProductWelcomeCard>
        <ProductWelcomeTitle>
            Welcome to Jumpstart
        </ProductWelcomeTitle>
        <ProductWelcomeText>
            Jumpstart is an online dashboard built specifically for working remote or at home. <br></br>
            Track daily affirmations, focused work objectives, and guided work sessions to maximize productivity in your own environment.
        </ProductWelcomeText>
        <ExploreButton type='button'>Explore Jumpstart</ExploreButton>
    </ProductWelcomeCard>
)

export default ProductIntro;