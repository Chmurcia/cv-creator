import styled from "styled-components";
import { Exp } from "../service/Services";

// Title TOP
const Title = styled.p`
  word-break: break-all;
  color: #353451;
  font-weight: bolder;
  font-size: 1.5rem;
  margin: 10px 0 3px 0;
  @media (max-width: 700px) {
    font-size: 1rem;
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

const ExpTime = styled.p`
  word-break: break-all;
  font-size: 0.9rem;
  margin: 10px 0 3px 0;
  @media (max-width: 700px) {
    font-size: 0.7rem;
    margin: 4px 0 1px 0;
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
    margin: 3px 0 1px 0;
  }
`;

const ExpLoc = styled.p`
  word-break: break-all;
  color: #616169;
  font-size: 0.7rem;
  margin: 0 0 3px 0;
  @media (max-width: 700px) {
    font-size: 0.6rem;
    margin: 0 0 2px 0;
  }
  @media (max-width: 500px) {
    font-size: 0.4rem;
    margin: 0 0 1px 0;
  }
`;

const ExpPosition = styled.p`
  word-break: break-all;
  color: #616169;
  font-weight: bolder;
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    margin: 0 0 5px 0;
    font-size: 0.7rem;
  }
  @media (max-width: 500px) {
    margin: 0 0 3px 0;
    font-size: 0.5rem;
  }
`;

const ExpDesc = styled.p`
  word-break: break-all;
  color: #616169;
  margin: 0 0 20px 0;
  font-size: 0.6rem;
  @media (max-width: 700px) {
    font-size: 0.43rem;
    letter-spacing: 0.01rem;
  }
  @media (max-width: 500px) {
    font-size: 0.33rem;
    margin: 0 0 10px 0;
  }
`;

//

interface FieldProps {
  title: string;
  things: Exp[];
}

const ExpField = ({ title, things }: FieldProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Line></Line>
      <Info>
        {things?.map(
          (item: {
            timeStart: string;
            timeEnd: string;
            position: string;
            location: string;
            company: string;
            summary: string;
          }) => {
            return (
              <ThingContainer key={item.summary}>
                <ExpTime>
                  <b>{item.timeStart}</b> - <b>{item.timeEnd}</b>
                </ExpTime>
                <ExpLoc>
                  {item.location} | {item.company}
                </ExpLoc>
                <ExpPosition>{item?.position}</ExpPosition>
                <ExpDesc>{item?.summary}</ExpDesc>
              </ThingContainer>
            );
          }
        )}
      </Info>
    </>
  );
};
export default ExpField;
