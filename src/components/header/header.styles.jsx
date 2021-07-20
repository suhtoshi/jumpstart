import styled from 'styled-components';

export const HeaderContainer = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: rgb(107, 78, 144);
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
export const LogoContainer = styled.div`

`