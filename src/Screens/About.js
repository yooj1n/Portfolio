import React from "react";
import styled from "styled-components";
import MainContainer from "../Layout/MainContainer";
import Separator from "../Layout/TitleSeparator";
import profile from "../img/profile.png";
import { Emphasis } from "../Components/shared";

const IMG = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
border: 1px solid black;
@media ${(props) => props.theme.tablet} {
  margin-bottom: 20px;
}
@media ${(props) => props.theme.mobile} {
  width: 120px;
  height: 120px;
}
`;

const ProfileWrap = styled.div`
  width: 30%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: auto;
  }
`;

const DescWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    width:100%;
    text-align: center;
  }
`;

const Description = styled.div`
 font-size: 16px;
 line-height: 25px;
 @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    line-height: 20px;
  }
`;

const BR = styled.br``;

const Spacer = styled.div`
height: 10px;
`;

const About = () => {
  return (
    <>
    <Separator title="About Me" />
    <MainContainer>
      <ProfileWrap>
        <IMG src={profile}/>
      </ProfileWrap>
      <DescWrap>
        <Description>
        React 와 React Native 를 주로 공부하고 있습니다. <BR />
        인스타그램과 트위터를 클론 코딩하며 공부했고,<BR /> 
        이를 바탕으로 감정 기록 앱과 코인 추세 앱 등을 개발했습니다. 
        <Spacer />
        현재는 강아지 유치원 알림장 앱과 ECORITZ 사 웹페이지 개발 외주를 진행하는 중입니다. <BR />
        앞으로 <Emphasis>리액트 네이티브를 네이티브처럼 다룰 수 있는 개발자</Emphasis>가 되고 싶습니다.
        </Description>
      </DescWrap>
    </MainContainer>
    </>
  )
}

export default About;