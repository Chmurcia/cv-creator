import styled from "styled-components";

const ErrorDiv = styled.div`
  width: 100dvw;
  height: 100dvh;
  color: #7d7d7d;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2em 0 2em;
`;

const NoPageFound = () => {
  return <ErrorDiv>Sorry! Page you are looking for does not exist!</ErrorDiv>;
};
export default NoPageFound;
