import React from "react";
import styled from "styled-components";

const SMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 0px 0px 0px;
  width: 100%;
  @media ${(props) => props.theme.tablet} {
    flex-direction:column;
    margin: 30px auto;
  }
`;

const MainContainer = ({children}) => {
    return (
      <SMainContainer>
        {children}
      </SMainContainer>
  )
}

export default MainContainer;