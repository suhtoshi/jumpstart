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
                <GetStartedExplainText>Jumpstart.com is your portal into the workday. Gone are the commutes to brace ourselves mentally for the day. Jumpstart enables users to take 10 to 15 minutes to transition into work mode.</GetStartedExplainText>
            </GetStartedExplain>
            <GetStartedPhoto></GetStartedPhoto>
        </GetStartedTop>
        <GetStartedCards>
            <HomeCard header="Affirmations" info="Track your daily affirmations."/>
            <HomeCard header="Prepare" info="Mentally prepare for your workday."/>
            <HomeCard header="Distractions" info="Track them. Remove them."/>
            <HomeCard header= "Brainstorm" info ="Organize your plans. Set your sails to succeed."/>
        </GetStartedCards>
    </GetStartedContainer>
)

export default GetStarted;