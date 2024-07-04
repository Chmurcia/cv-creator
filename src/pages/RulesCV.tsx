import styled from "styled-components";
import { Button } from "../ui/Button";
import { Rule } from "../ui/Rule";

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
        <Rule
          numStr="1"
          title="Provide only important informations"
          desc="Focus on details relevant to the job you are applying for"
        />
        <Rule
          numStr="2"
          title="Add a professional photo"
          desc="A clear, high-quality headshot can make your CV stand out"
        />
        <Rule
          numStr="3"
          title="Professional summary"
          desc="Write a concise summary highlighting your key skills and career
            goals"
        />
        <Rule
          numStr="4"
          title="Work experience"
          desc="Detail your past roles, responsibilities, and achievements"
        />
        <Rule
          numStr="5"
          title="Describe your skills"
          desc="List both technical and soft skills relevant to the job"
        />
        <Rule
          numStr="6"
          title="Education"
          desc="Highlight your educational background and any relevant
            certifications"
        />
        <Rule
          numStr="7"
          title="Include hobbies"
          desc="Share your interests if they are relevant or showcase unique aspects
            of your personality"
        />
        <Rule
          numStr="8"
          title="Make it easier to read"
          desc="Use clear headings, bullet points, appropriate font, and a clean
            layout"
        />
      </Main>

      <Footer>
        <FooterText>
          If you want to make the process lighter, just go to editor and create
          your desired outcome
        </FooterText>
        <FooterText>We will take care of everything else</FooterText>
        <Button to="/editor" type="big">
          Go to editor
        </Button>
      </Footer>
    </Site>
  );
};

export default RulesCV;
