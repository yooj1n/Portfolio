import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const HeadWrap = styled.div`
  padding-top: 30px;
`;

const Name = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const SecondWrap = styled.div`
  padding-top: 5px;
`;

const English = styled.span`
  font-size: 24px;
  font-weight: 300;
`

const Korean = styled.span`
  font-size: 16px;
  color: #a5b1c2;
  margin-left: 8px;
`

const BtnWrap = styled.div`
`;

const Btn = styled.button`
  padding: 5px 10px;
  margin-right: 8px;
  background-color: ${(props) => props.theme.base};
  border-radius: 5px;

  :hover {
    background-color: ${(props) => props.theme.emphasis};
    transform: scale(1.05);
    transition: 0.25s ease-in-out;
  }
`;

const BtnText = styled.span`
  font-size: 12px;
  color: white;
`;

const Head = () => {
  return (
    <HeadWrap>
      <Name>김유진</Name>
      <SecondWrap>
        <English>Front-End</English>
        <Korean>프론트엔드 주니어 개발자</Korean>
      </SecondWrap>
      <BtnWrap>
        <Btn>
          <FontAwesomeIcon icon={faCloudDownloadAlt} color="white" pull="left"/>
          <BtnText>DOWNLOAD CV</BtnText>
        </Btn>
        <Btn>
          <BtnText>CONTACT</BtnText>
        </Btn>
      </BtnWrap>
    </HeadWrap>
  )
}

export default Head;