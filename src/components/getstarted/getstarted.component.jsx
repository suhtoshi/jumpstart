import React from 'react';
import {
        GetStartedContainer, 
        GetStartedExplain, 
        GetStartedPhoto, 
        GetStartedCards,
        GetAffirmation,
        GetPrepare,
        GetDistraction,
        GetBrainstorm,
        GetStartedTop,
        GetStartedExplainTitle,
        GetStartedExplainText
        } from './getstarted.styles'

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
            <GetAffirmation>Track Daily Affirmations</GetAffirmation>
            <GetPrepare>Prepare for the workday</GetPrepare>
            <GetDistraction>Track Distractions and Eleminate Them</GetDistraction>
            <GetBrainstorm>Brainstorm Daily Objectives</GetBrainstorm>
        </GetStartedCards>
    </GetStartedContainer>
)

export default GetStarted;