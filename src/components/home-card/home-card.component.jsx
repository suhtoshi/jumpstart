import React from 'react';
import {CardContainer} from './home-card.styles'
import {withRouter} from 'react-router-dom';




const HomeCard = ({photo, header, info, history, match, route}) => (
    <CardContainer onClick={()=> history.push(`${match.url}${route}`)}>
        <img alt="" src={photo}/>
        <h2>{header.toUpperCase()}</h2>
        <p>{info}</p>
    </CardContainer>
)

export default withRouter(HomeCard);