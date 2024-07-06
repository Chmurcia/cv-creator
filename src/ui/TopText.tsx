import styled from "styled-components";

const FullName = styled.p`
  font-size: 2rem;
  margin: 0;
  word-break: break-all;
  @media (max-width: 700px) {
    font-size: 1.1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const OccupationName = styled.p`
  font-size: 1.1rem;
  letter-spacing: 0.3rem;
  margin: 0;
  word-break: break-all;
  @media (max-width: 700px) {
    font-size: 0.7rem;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 500px) {
    font-size: 0.5rem;
    letter-spacing: 0.1rem;
  }
`;

const Summary = styled.p`
  font-size: 0.6rem;
  margin: 2px 0 0 0;
  word-break: break-all;
  @media (max-width: 700px) {
    font-size: 0.4rem;
  }
  @media (max-width: 500px) {
    font-size: 0.3rem;
  }
`;

interface TopTextProps {
  firstName: string;
  lastName: string;
  occupation: string;
  summary: string;
}

export const TopText = ({
  firstName,
  lastName,
  occupation,
  summary,
}: TopTextProps) => {
  return (
    <>
      <FullName>
        <b> {firstName} </b>
        {lastName}
      </FullName>
      <OccupationName>{occupation}</OccupationName>
      <Summary>{summary}</Summary>
    </>
  );
};
