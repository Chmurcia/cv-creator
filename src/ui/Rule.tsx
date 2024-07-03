import styled from "styled-components";

const StyledRule = styled.div`
  padding: 2rem 0 2rem 0;
`;

const RuleTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const RuleDesc = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #575757;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`;

type RuleProps = { title: string; desc: string; numStr: string };

export const Rule = ({ numStr, title, desc }: RuleProps) => {
  return (
    <StyledRule>
      <RuleTitle>
        {numStr} - {title}.
      </RuleTitle>
      <RuleDesc>{desc}.</RuleDesc>
    </StyledRule>
  );
};
