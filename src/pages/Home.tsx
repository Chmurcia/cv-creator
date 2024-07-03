import styled from "styled-components";
import { Button } from "../ui/Button";

const Site = styled.div`
  font-family: "Open sans", sans-serif;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainTitle = styled.p`
  font-weight: bolder;
  font-size: 10rem;
  margin: 0;
`;

const SubText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #7d7d7d;
  margin: 0;
`;

const Home = () => {
  return (
    <Site>
      <TextDiv>
        <MainTitle>CloudCV</MainTitle>
        <SubText>Create your CV rapid and well</SubText>
      </TextDiv>
      <Button type="big">Create your CV</Button>
    </Site>
  );
};

export default Home;
