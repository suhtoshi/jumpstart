import React from 'react';
import {CardContainer, CardContainerInfo, CardContainerPhoto} from './home-card.styles'
import {withRouter} from 'react-router-dom';




const HomeCard = ({photo, header, info, history, match, route}) => (
    <CardContainer onClick={()=> history.push(`${match.url}${route}`)}>
        <CardContainerPhoto alt="" src={photo}/>
        <CardContainerInfo>
            <h2>{header.toUpperCase()}</h2>
            <p>{info}</p>
        </CardContainerInfo>
            
    </CardContainer>
)

export default withRouter(HomeCard);