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
            <HomeCard header="affirmations" info="Create your daily affirmations to get into work mode."/>
            <HomeCard header= "brainstorm" info ="Organize your plans. Set your sails to succeed."/>
            <HomeCard header="prepare" info="Mentally prepare for your workday."/>
            <HomeCard header="distractions" info="Track them. Remove them."/>
        </GetStartedCards>
    </GetStartedContainer>
)

export default GetStarted;