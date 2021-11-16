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
  margin: 20px 0px;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
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
          <Emphasis>디자인</Emphasis>
          <Description>디자인을 공부한 적은 없지만, <BR/> 항상 흥미를 가지고 있습니다.</Description>
        </SmallWrap>
        <SmallWrap>
          <Emphasis>적응력</Emphasis>
          <Description>새로운 것에 거부감이 없고, <BR/>시도하는 것을 좋아합니다.</Description>
        </SmallWrap>
        <SmallWrap>
          <Emphasis>경청과 소통</Emphasis>
          <Description>여러 의견을 듣고, 스스로 생각을 정리한 뒤 <BR/>소통하는 것을 선호합니다.</Description>
        </SmallWrap>
      </DescWrap>
    </MainContainer>
    </>
  )
}

export default Strength;