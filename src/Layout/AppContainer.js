import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Emphasis } from "../Components/shared";

const SAppContainer = styled.div`
display: flex;
flex-direction: row;
width: 50%;
@media ${(props) => props.theme.mobile} {
  margin-bottom: 30px;
  width: 100%;
  }
`

const DescWrap = styled.div`
width: 50%;
margin: 0px auto;
position: relative;
`;

const RNVideo = styled.video`
  width: 120px;
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const Sp = styled.span`
color: #7DDFFF;
font-style: italic;
margin-right: 7px;
`;



const GithubWrap = styled.a`
font-size: 14px;
color: ${(props) => props.theme.base};
position: absolute;
bottom: 1%;
/* transform: translate(0%, -50%); */
:hover {
  color: ${(props) => props.theme.emphasis};
}
`;

const Code = styled.span`
font-size: 14px;
margin-left: 5px;
`

const AppContainer = ({src, Name, href, children  }) => {
  return (
    <SAppContainer>
      <RNVideo src={src} playsInline loop autoPlay muted />
      <DescWrap>
        <Title>
          <Emphasis><Sp>ReactNative</Sp>{Name}</Emphasis>
        </Title>
        {children}
        <GithubWrap href={href} target="_blank" referrerPolicy={"no-referrer"}>
          <FontAwesomeIcon icon={faGithub} />
          <Code>Code 보러가기</Code>
        </GithubWrap>
      </DescWrap>
  </SAppContainer>
  )
};

export default AppContainer;