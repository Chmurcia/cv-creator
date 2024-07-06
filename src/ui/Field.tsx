import styled from "styled-components";

// Title TOP
const Title = styled.p`
  color: white;
  font-weight: bolder;
  font-size: 1.5rem;
  margin: 20px 0 3px 0;
  @media (max-width: 700px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
    margin: 15px 0 2px 0;
  }
`;
// Line MIDDLE
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: white;
`;
// Container BOTTOM
const Info = styled.div`
  margin: 0;
`;

const ThingContainer = styled.div`
  margin: 0;
`;

const NameTitle = styled.p`
  color: white;
  font-weight: bolder;
  margin: 10px 0 0 0;
  font-size: 0.9rem;
  word-break: break-all;
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
  }
`;

const NameDesc = styled.p`
  color: white;
  margin: 0;
  font-size: 0.7rem;
  word-break: break-all;

  @media (max-width: 700px) {
    font-size: 0.5rem;
  }
  @media (max-width: 500px) {
    font-size: 0.36rem;
  }
`;

//

interface Thing {
  name?: string;
  value: string;
}

interface FieldProps {
  title: string;
  things: Thing[];
}

const Field = ({ title, things }: FieldProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Line></Line>
      <Info>
        {things?.map((item: { name?: string; value: string }) => {
          return (
            <ThingContainer key={item.value}>
              <NameTitle>{item?.name}</NameTitle>
              <NameDesc>{item?.value}</NameDesc>
            </ThingContainer>
          );
        })}
      </Info>
    </>
  );
};
export default Field;
