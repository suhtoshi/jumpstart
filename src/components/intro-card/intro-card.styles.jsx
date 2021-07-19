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
    padding-top: 70px;

`


export const ContentContainer = styled.div `
  height: 90px;
  width: 40%;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107, 78, 144);
`
export const ContentTitle = styled.div `
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 2.2em;
  color: white;
`