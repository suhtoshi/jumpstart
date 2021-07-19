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
    padding-top: 140px;
`
export const ContentContainer = styled.div `
  height: 90px;
  width: 20%;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107, 78, 144);
  opacity: 0.9;
  @media screen and (max-width: 800px) {
    height: 50px;
  }
`
export const ContentTitle = styled.div `
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 2em;
  color: white;
  text-align: center;
    @media screen and (max-width: 800px) {
      font-size: 1.2em;
    }
`