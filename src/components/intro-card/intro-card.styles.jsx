import styled from 'styled-components';
import img from '../../assets/introcard.jpg'

export const IntroCardContainer = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
`