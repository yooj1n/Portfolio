import React from "react";
import styled from "styled-components";
import MainContainer from "../Layout/MainContainer";
import Separator from "../Layout/TitleSeparator";
import profile from "../img/profile.png";

const IMG = styled.img`
width: 180px;
height: 180px;
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
  width: 70%;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.tablet} {
    width:100%;
    text-align: center;
  }
`;

const Description = styled.div`
 font-size: 16px;
 line-height: 25px;
 @media ${(props) => props.theme.mobile} {
    font-size:12px;
    line-height: 20px;
  }
`;

const BR = styled.br``;

const Spacer = styled.div`
height: 10px;
`;

const Emphasis = styled.span`
  background-color: ${(props) => props.theme.darkblue};
  padding: 2px 7px;
  border-radius: 10px;
  color: white;
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
        리액트와 리액트네이티브를  중점을 두고 준비하고 있습니다.<BR />
        짧은 기간동안 다양한 기술을 접하기 위해 여러 강의를 들으며 학습했습니다. 
        <Spacer />
        현재는 학습한 것을 토대로<BR />
        상업적 이용이 가능한 풀페이지 소스를 이용한 ECORITZ사 웹 페이지 개발 단계에 있으며,<BR />
        반려견 유치원 전용 알림장 어플을 기획하고 있습니다. 
        <Spacer />
        확장성, 유지 보수성이 높은 클린 코드를 지향하며,<BR />
        어떻게든 해내는 <Emphasis>함께 일하고 싶은 개발자</Emphasis>가 되겠습니다.
        </Description>
      </DescWrap>
    </MainContainer>
    </>
  )
}

export default About;