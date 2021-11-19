import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Separator from "../Layout/TitleSeparator";

const ContactWrap = styled.div`
width: 90%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 50px;
width: 100%;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
`;

const ContactContainer = styled.a`
display: flex;
flex-direction: row;
align-items:center;

  color: ${(props) => props.theme.base};

  :hover {
    color: ${(props) => props.theme.emphasis};
    transform: scale(1.1);
    transition: 0.3s ease-in-out;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 0px 0px 10px 0px;
    font-size: 16px;
  }

`;

const Name = styled.div`
  font-size: 18px;
  margin-left: 15px;
`;


const Contact = () => {
  return (
    <>
    <Separator title="Contact" />
      <ContactWrap>
        <ContactContainer href={"https://github.com/yooj1n"} target="_blank" referrerPolicy={"no-referrer"}>
            <FontAwesomeIcon icon={faGithub} />
            <Name>GITHUB</Name>
        </ContactContainer>
        <ContactContainer href={"https://github.com/yooj1n"} target="_blank" referrerPolicy={"no-referrer"}>
            <FontAwesomeIcon icon={faLinkedin} />
            <Name>LINKEDIN</Name>
        </ContactContainer>
        <ContactContainer href={"mailto:ujin07150@gmail.com"} target="_blank" referrerPolicy={"no-referrer"}>
            <FontAwesomeIcon icon={faGoogle} />
            <Name>MAIL</Name>
        </ContactContainer>
      </ContactWrap>
    </>

  )
};

export default Contact;
