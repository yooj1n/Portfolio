import styled from "styled-components";

const Wrap = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 25px;
  @media ${(props) => props.theme.tablet} {
    width:90%;
  }
  @media ${(props) => props.theme.mobile} {
    width:90%;
  }
`

const FullWrap = ({children}) => {
    return (
      <Wrap>
        {children}
      </Wrap>)
}

export default FullWrap;