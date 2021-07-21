import React from 'react';
import {CardContainer} from './home-card.styles'

const HomeCard = (props) => (
    <CardContainer>
        <img alt="" src={props.photo}/>
        <h2>{props.header}</h2>
        <p>{props.info}</p>
    </CardContainer>
)

export default HomeCard;