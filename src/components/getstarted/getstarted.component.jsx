import React from 'react';
import {
        GetStartedContainer, 
        GetStartedExplain, 
        GetStartedPhoto, 
        GetStartedCards,
        GetStartedTop,
        GetStartedExplainTitle,
        GetStartedExplainText
        } from './getstarted.styles'
import HomeCard from '../home-card/home-card.component';

const GetStarted = () => (
    <GetStartedContainer>
        <GetStartedTop>
            <GetStartedExplain>
                <GetStartedExplainTitle>Get started</GetStartedExplainTitle>
                <GetStartedExplainText>Jumpstart.com is your portal into the remote workday. Gone are the commutes to brace ourselves mentally for the day. Jumpstart enables users to take 10 to 15 minutes to transition into work mode. Here's what we recommend to start working with Jumpstart.</GetStartedExplainText>
            </GetStartedExplain>
            <GetStartedPhoto></GetStartedPhoto>
        </GetStartedTop>
        <GetStartedCards>
            <HomeCard header="create affirmations" info="Affirmations help give you that motivation you need it most."/>
            <HomeCard header= "start brainstorming" info ="Organize your day. Set your first objective and path to completion."/>
            <HomeCard header="prepare for challenges" info="Define your hurdles and prepare for necessary pivots."/>
            <HomeCard header="remove distractions" info="Find them. Track them. Remove them."/>
        </GetStartedCards>
    </GetStartedContainer>
)

export default GetStarted;