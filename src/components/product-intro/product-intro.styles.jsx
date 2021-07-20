import styled from 'styled-components';

export const ProductWelcomeCard = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const ProductWelcomeTitle = styled.h1 `
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 0;
`

export const ProductWelcomeText = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
`

export const ExploreButton = styled.button `
    font-size: 1em;
    color: rgb(242,242,242);
    background-color: rgb(107, 78, 144);
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rgb(242,242,242);
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: rgb(242,242,242);
        color: rgb(107,78,144);
    }
`
