import styled from "styled-components";

const Site = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  height: 100dvh;
  overflow-x: hidden;
`;
// Inputs

const InputsArea = styled.div`
  width: 20%;
  height: 70%;
  background-color: #ffffff;
  border: 1px solid #1c1c1c;
`;

// CV
const CV = styled.div`
  width: 30%;
  height: 80%;
  background-color: #ffffff;
  border: 1px solid #1c1c1c;
`;

const Editor = () => {
  return (
    <Site>
      <InputsArea>a</InputsArea>
      <CV>b</CV>
    </Site>
  );
};

export default Editor;
