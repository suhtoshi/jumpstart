import styled from 'styled-components';

export const CustomButtonContainer = styled.button `
    font-size: 1em;
    color: rgb(242,242,242);
    background-color: rgb(28, 5, 58);
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid rgb(242,242,242);
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: rgb(242,242,242);
        color: rgb(28, 5, 58);
    }
`