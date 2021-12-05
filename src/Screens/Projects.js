import React from "react";
import styled from "styled-components";
import Separator from "../Layout/TitleSeparator";
import diary from "../video/diary.mp4"
import movies1 from "../video/movies1.mp4"
import language from "../video/language.mp4"
import coin from "../video/coin.mp4"
import Tweet from "../video/Tweet.mp4"
import CarrotGame from "../video/CarrotGame.mp4"
import AppContainer from "../Layout/AppContainer";
import WebContainer from "../Layout/WebContainer";

const MainWrap = styled.div`
  width: 100%;
  @media ${(props) => props.theme.mobile} {
    margin-top: 20px;
  }
`;

const AppWebWrap = styled.div`
display: flex;
flex-direction: row;
margin-top: 50px;
@media ${(props) => props.theme.mobile} {
    flex-direction:column;
    margin-bottom: 0px;
  }
`;

const Description = styled.div`
font-weight: 300;
font-size: 14px;
margin: 15px 0px 0px 10px;
`;

const IMG = styled.img`
width: 100%;
`

const Projects = () => {
  return (
    <>
    <Separator title="(Ongoing) Projects" />
    <MainWrap>
      <AppWebWrap>
        <AppContainer src={diary} Name="감정기록 APP" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/uj-diary">
          <Description>-Realm <br/> -I dont know</Description>
        </AppContainer>
        <AppContainer src={language} Name="Language App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/langaugeApp">
          <Description>하하하하핳 미치겠군</Description>
        </AppContainer>
      </AppWebWrap>
      <AppWebWrap>
        <AppContainer src={coin} Name="Coin App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/social-coin">
          <Description>-Realm <br/> -I dont know</Description>
        </AppContainer>
        <AppContainer src={movies1} Name="Movies App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/noovies">
          <Description>하하하하핳 미치겠군</Description>
        </AppContainer>
      </AppWebWrap>
      <AppWebWrap>
        <WebContainer src={Tweet} Name="Tweet Web" href="https://github.com/yooj1n/TIL/tree/main/React/nwitter">
        <Description>하하하하핳 미치겠군</Description>
        </WebContainer>
      </AppWebWrap>
      <AppWebWrap>
      <WebContainer src={CarrotGame} Name="Carrot Game" ES6 href="https://github.com/yooj1n/TIL/tree/main/JavaScript/Game/carrotGame">
        <Description>하하하하핳 미치겠군</Description>
        </WebContainer>
      </AppWebWrap>
    </MainWrap>
    </>
  )
};

export default Projects;