import styled from 'styled-components';
import img from '../../assets/getstarted.jpg'

export const GetStartedContainer = styled.div  `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    padding-top: 50px;
    background-color: rgb(49, 21, 87);
    ${'' /* padding-right: 20px;
    padding-left: 20px; */}

`
export const GetStartedTop = styled.div `
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

`

export const GetStartedExplain = styled.div `
    display: flex;
    flex-direction: column;
    width: 40%;
`
export const GetStartedExplainTitle = styled.h1 `

`
export const GetStartedExplainText = styled.p `
    width: 100%;
`

export const GetStartedPhoto = styled.div `
    width: 40%;
    height: 400px;
    background-image: url(${img});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;

`
export const GetStartedCards = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding-top: 100px;

`
export const GetAffirmation = styled.div `
display: flex;
`
export const GetPrepare = styled.div `
display: flex;
`
export const GetDistraction = styled.div `
display: flex;
`
export const GetBrainstorm = styled.div `
display: flex;
`