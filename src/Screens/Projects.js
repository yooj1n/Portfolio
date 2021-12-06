import React from "react";
import styled from "styled-components";
import Separator from "../Layout/TitleSeparator";
import diary from "../video/diary.mp4"
import movies from "../video/movies.mp4"
import language from "../video/language.mp4"
import coin from "../video/coin.mp4"
import Tweet from "../video/Tweet.mp4"
import CarrotGame from "../video/CarrotGame.mp4"
import AppContainer from "../Layout/AppContainer";
import WebContainer from "../Layout/WebContainer";
import ongoing from "../img/ongoing.png"

const MainWrap = styled.div`
  width: 100%;
`;

const AppWebWrap = styled.div`
display: flex;
flex-direction: row;
margin-top: 50px;
@media ${(props) => props.theme.tablet} {
    margin-bottom: 30px;
  }
@media ${(props) => props.theme.mobile} {
    flex-direction:column;
    margin-bottom: 0px;
    margin-top: 20px;
  }
`;

const Description = styled.div`
font-weight: 400;
font-size: 14px;
margin: 15px 0px 0px 5px;
line-height: 30px;
@media ${(props) => props.theme.tablet} {
  font-size: 12px;
  margin-left: 0px;
  line-height: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
    line-height: 15px;
  }
`;

const IMG = styled.img`
width: 100%;
margin-top: 25px;
@media ${(props) => props.theme.tablet} {
  margin-top: 10px;
}
`
const F = styled.span`
font-size: 18px;
font-weight: 600;
font-style: italic;
color: #028FD9;
@media ${(props) => props.theme.mobile} {
  font-size: 14px;
  }
`

const Projects = () => {
  return (
    <>
    <Separator title="Projects" />
    <MainWrap>
      <AppWebWrap>
        <AppContainer src={diary} Name="감정기록 APP" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/uj-diary">
          <Description>
          ㆍ Realm SDK(MongoDB)<br/>
          ㆍ Stack/Tabs nivigation<br/>
          ㆍ Screen Styling<br/>
          ㆍ Create / Read / Delete<br/>
          ㆍ Admob 광고 삽입<br/>
          </Description>
        </AppContainer>
        <AppContainer src={language} Name="Word App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/langaugeApp">
          <Description>
          ㆍ Interactive Animation<br/>
          ㆍ Interpolations<br/>
          ㆍ Pan Responder<br/>
          ㆍ Cards Drag and Drop<br/>
          </Description>
        </AppContainer>
      </AppWebWrap>
      <AppWebWrap>
        {/* Coin App */}
        <AppContainer src={coin} Name="Coin App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/social-coin">
          <Description>
          ㆍ Firebase IOS Setup<br/>
          ㆍ API fetch<br/>
          ㆍ Create Account<br/>
          ㆍ Flat List<br/>
          ㆍ Victory Chart<br/>
          </Description>
        </AppContainer>
        <AppContainer src={movies} Name="Movies App" href="https://github.com/yooj1n/TIL/tree/main/ReactNative/noovies">
          <Description>
          ㆍ API fetch<br/>
          ㆍ 무제한 스크롤<br/>
          ㆍ Detail Screen<br/>
          ㆍ Search<br/>
          </Description>
        </AppContainer>
      </AppWebWrap>
      <AppWebWrap>
        {/* Tweet */}
        <WebContainer src={Tweet} Name="Tweet Web" href="https://github.com/yooj1n/TIL/tree/main/React/nwitter">
        <Description>
          <F>FireBase </F>에서 제공하는<br/>
          ㆍ Provider - Social Login(Google,Github,Email)<br/>
          ㆍ Auth Service - 계정 생성<br/>
          ㆍ Firestore - Realtime Tweet Create and Read<br/>
          ㆍ dbService - Tweet Delete and Update<br/>
          ㆍ FileReader API -  Image File Upload <br/>
          ㆍ Update Profile page
        </Description>
        </WebContainer>
      </AppWebWrap>
      <AppWebWrap>
        {/* Carrot Game */}
      <WebContainer src={CarrotGame} Name="Carrot Game" ES6 href="https://github.com/yooj1n/TIL/tree/main/JavaScript/Game/carrotGame">
        <Description>
          ㆍ Field 지정<br/>
          ㆍ Game Count<br/>
          ㆍ PopUp창 <br/>
          ㆍ Mouse Events<br/>
          ㆍ 게임요소 Random 배치<br/>
          ㆍ Sound 삽입
        </Description>
      </WebContainer>
      </AppWebWrap>
      <IMG src={ongoing} />
    </MainWrap>
    </>
  )
};

export default Projects;