import styled from 'styled-components';

export const HomePageContainer = styled.div `
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1500px){
    padding-right: 200px;
    padding-left: 200px;
    }
    @media screen and (min-width: 800px){
    padding-right: 0px;
    padding-left: 0px;
    }
`