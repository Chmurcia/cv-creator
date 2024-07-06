import styled from "styled-components";
import { Edu } from "../service/Services";

// Title TOP
const Title = styled.p`
  color: #353451;
  font-weight: bolder;
  font-size: 1.5rem;
  margin: 20px 0 3px 0;
  @media (max-width: 700px) {
    font-size: 1rem;
    margin: 10px 0 3px 0;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;
// Line MIDDLE
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #353451;
`;
// Container BOTTOM
const Info = styled.div`
  margin: 0;
`;

const ThingContainer = styled.div`
  margin: 0;
`;

const EduYear = styled.p`
  color: #616169;
  margin: 10px 0 0 0;
  font-size: 0.8rem;
  @media (max-width: 700px) {
    font-size: 0.5rem;
    margin: 3px 0 0 0;
  }
  @media (max-width: 500px) {
    font-size: 0.3rem;
    margin: 1px 0 0 0;
  }
`;

const EduDegree = styled.p`
  color: #353451;
  margin: 0;
  font-weight: bolder;
  font-size: 0.9rem;
  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
  }
`;
const EduLoc = styled.p`
  color: #616169;
  font-size: 0.8rem;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 0.5rem;
  }
  @media (max-width: 500px) {
    font-size: 0.3rem;
  }
`;

//

interface FieldProps {
  title: string;
  things: Edu[];
}

const EduField = ({ title, things }: FieldProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Line></Line>
      <Info>
        {things?.map(
          (item: { year?: string; degree: string; place: string }) => {
            return (
              <ThingContainer key={item.degree}>
                <EduYear>{item?.year}</EduYear>
                <EduDegree>{item?.degree}</EduDegree>
                <EduLoc>{item.place}</EduLoc>
              </ThingContainer>
            );
          }
        )}
      </Info>
    </>
  );
};
export default EduField;
