import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  padding-top: 50px;
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #ecf0f1;
  margin: auto;
`;


const Separator = ({title}) => {
  return (
    <>
    <Title>{title}</Title>
    <Line/>
    </>
  )
};

export default Separator;