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
export const ContentContainer = styled.div `
  height: 30%;
  width: 20%;
  padding-top: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  margin-right: 120px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(107, 78, 144);
  opacity: 0.9;
  @media screen and (max-width: 800px) {
    height: 15%;
    width: 20%;
    margin-right: 70px;
    margin-top: 80px;

  }
`
export const ContentTitle = styled.div `
  font-weight: bold;
  font-size: 2em;
  color: white;
  text-align: center;
    @media screen and (max-width: 800px) {
      font-size: 1.2em;
      font-weight: bold;
    }
`