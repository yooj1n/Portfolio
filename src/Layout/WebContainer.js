import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Emphasis } from "../Components/shared";

const SWebContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const DescWrap = styled.div`
width: 50%;
margin-left: 60px;
position: relative;
  @media ${(props) => props.theme.mobile} {
    margin: 0px auto;
  }

`;

const Video = styled.video`
  width: 400px;
  border-radius: 15px;
  @media ${(props) => props.theme.mobile} {
    width: 150px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const Sp = styled.span`
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

const WebContainer = ({src, Name, ES6, href, children  }) => {
  return (
    <SWebContainer>
      <Video src={src} playsInline loop autoPlay muted />
      <DescWrap>
        <Title>
          <Emphasis><Sp style={{color:ES6 ? "#FBDE34" : "#7DDFFF"}}>{ES6 ? "ES6" : "React"}</Sp>{Name}</Emphasis>
        </Title>
        {children}
        <GithubWrap href={href} target="_blank" referrerPolicy={"no-referrer"}>
          <FontAwesomeIcon icon={faGithub} />
          <Code>Code 보러가기</Code>
        </GithubWrap>
      </DescWrap>
  </SWebContainer>
  )
};

export default WebContainer;