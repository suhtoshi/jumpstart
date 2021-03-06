import styled from 'styled-components';

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    height: 400px;
    background: linear-gradient(
    to left,
    rgba(143, 120, 173,1) 0%,
    rgba(28, 5, 58, 1) 100%
    );
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
    @media screen and (max-width: 800px){
    height: auto;
    width: auto;
    }
`

export const CardContainerPhoto = styled.image `
`

export const CardContainerInfo = styled.div `
    font-size: 0.85em;
    background: rgba(28, 5, 58, 1);
    padding: 25px;
`