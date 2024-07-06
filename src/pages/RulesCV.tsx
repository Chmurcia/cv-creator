import styled from "styled-components";
import { ButtonLink } from "../ui/ButtonLink";
import { Rules } from "../ui/Rules";

const Site = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: #1c1c1c;
  letter-spacing: 0.2em;
  padding: 0 2rem 0 2rem;
  overflow-x: hidden;
`;

// Header
const Header = styled.header`
  padding: 7rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  font-weight: bolder;
  font-size: 3.5em;
  margin: 0;
  @media (max-width: 550px) {
    font-size: 2.5em;
  }
`;

const SubText = styled.p`
  color: #525252;
  font-weight: bold;
  font-size: 1.5rem;
`;

// Main
const Main = styled.main`
  border-top: 1px dotted rgba(30, 30, 30, 0.2);
  border-bottom: 1px dotted rgba(30, 30, 30, 0.2);
  padding: 4rem 0 4rem 0;
  width: 100%;
`;

// Footer
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0 4rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin: 0 0 1rem 0;
  @media (max-width: 550px) {
    font-size: 1%.2;
  }
`;

const RulesCV = () => {
  return (
    <Site>
      <Header>
        <Title>How to create appropriate CV?</Title>
        <SubText>
          Good CV is an essential part of your journay. It does not seem hard at
          the beginning, yet it involves some principles you ought to know.
        </SubText>
      </Header>

      <Main>
        <Rules />
      </Main>

      <Footer>
        <FooterText>
          If you want to make the process lighter, just go to editor and create
          your desired outcome
        </FooterText>
        <FooterText>We will take care of everything else</FooterText>
        <ButtonLink to="/editor" type="big">
          Go to editor
        </ButtonLink>
      </Footer>
    </Site>
  );
};

export default RulesCV;
