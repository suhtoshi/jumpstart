import React from 'react';
import {InfoSectionContainer,
        InfoSectionImageContainer, 
        InfoSectionText,
        InfoSectionTextHeader,
        InfoSectionTextBody} 
        from './info-section.styles'
import { ExploreButton } from '../product-intro/product-intro.styles';
import {withRouter} from 'react-router-dom';

const InfoSection = ({photo, header, info, history, match, route}) => (
    <InfoSectionContainer>
        <InfoSectionText>
            <InfoSectionTextHeader>{header}</InfoSectionTextHeader>
            <InfoSectionTextBody>{info}</InfoSectionTextBody>
            <ExploreButton onClick={()=> history.push(`${match.url}${route}`)}>What is Jumpstart?</ExploreButton>
        </InfoSectionText>
        <InfoSectionImageContainer>
            {photo}
        </InfoSectionImageContainer>
    </InfoSectionContainer>

)

export default withRouter(InfoSection);