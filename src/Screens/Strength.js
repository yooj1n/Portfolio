import React from "react";
import styled from "styled-components";
import Separator from "../Layout/TitleSeparator";
import { Emphasis } from "../Components/shared";
import MainContainer from "../Layout/MainContainer";

const DescWrap = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 16px;
font-weight: 500;
@media ${(props) => props.theme.mobile} {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width:100%;
    text-align: center;
  }
`;

const SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin: 20px 0px 0px 0px;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
    line-height: 18px;
    margin: 10px 0px;
  }
`

const BR = styled.br``;

const Strength = () => {
  return (
    <>
    <Separator title="Strength" />
    <MainContainer>
      <DescWrap>
        <SmallWrap>
          <Emphasis>Design</Emphasis>
          <Description>유저 사용성에 대해 많은 고민을 하며 <BR/> 
          관련 아티클을 공부하고 있습니다.
          </Description>
        </SmallWrap>
        <SmallWrap>
          <Emphasis>Challenge</Emphasis>
          <Description>새로운 도전에 겁먹지 않고 우선 시도해보며<BR/>
          어떻게든 해내려고 합니다.
          </Description>
        </SmallWrap>
        <SmallWrap>
          <Emphasis>Communication</Emphasis>
          <Description>하나의 주제에 대해 기획자, 디자이너, 마케터 등 <BR/>
          여러 직군과 함께 이질감 없이 논의할 수 있습니다
          </Description>
        </SmallWrap>
      </DescWrap>
    </MainContainer>
    </>
  )
}

export default Strength;