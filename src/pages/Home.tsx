import styled from "styled-components";
import { ButtonLink } from "../ui/ButtonLink";

const Site = styled.div`
  font-family: "Open sans", sans-serif;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding: 0 2rem 0 2rem;
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

  @media (max-width: 750px) {
    font-size: 5rem;
  }
`;

const SubText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #7d7d7d;
  margin: 0;
  display: flex;
  text-align: center;
  gap: 8px;
  @media (max-width: 750px) {
    font-size: 1rem;
  }
`;

const SingleP = styled.p`
  color: #2ccea8;
  margin: 0;
`;

const Home = () => {
  return (
    <Site>
      <TextDiv>
        <MainTitle>CloudCV</MainTitle>
        <SubText>
          Create your CV <SingleP>rapid</SingleP> and <SingleP>well</SingleP>
        </SubText>
      </TextDiv>
      <ButtonLink to="/editor" type="big">
        Create your CV
      </ButtonLink>
    </Site>
  );
};

export default Home;
