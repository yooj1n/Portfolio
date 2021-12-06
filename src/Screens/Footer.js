import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
height: 130px;
background-color: ${(props) => props.theme.base};
margin-top: 50px;
color: gray;
position: relative;
`;

const FooterText = styled.a`
width: max-content;
  color: #485460;
  font-size: 12px; 
  margin: 0 auto;
  text-align:center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  :hover {
    color: #808e9b;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterText href="https://github.com/yooj1n/Portfolio" target="_blank" referrerPolicy={"no-referrer"}>
        © 2021 Yoojin Kim. <br/> All Rights Reserved.
      </FooterText>
    </FooterWrap>
  )
};

export default Footer;