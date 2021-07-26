import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: rgb(28, 5, 58);
    @media screen and (max-width: 800px){
        height: 60px;
        padding: 10px;
    }
`
export const HeaderText = styled.h1`
    color: white;
    display: flex;
    align-items: center;
`
export const LogoContainer = styled(Link) `
    display: flex;
    align-items: center;
    height: 100%;
    width: 70px;
    padding-left: 20px;

    @media screen and (max-width: 800px){
        width: 50px;
        padding: 0;
    }
`

export const OptionsContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-color: white;

    @media screen and (max-width: 800px){
        width: 80%;
    }
`
export const Options = styled.div`
    padding: 10px 15px;
    cursor: pointer;
    color: white;
`