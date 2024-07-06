import styled from "styled-components";
import Field from "../Field";
import { TopText } from "../TopText";
import ExpField from "../ExpField";
import EduField from "../EduField";
import { Contact, Edu, Exp, Val } from "../../service/Services";

const CVParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Cv1Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 0 5% 4%;
  background-color: #353451;
  width: 30%;
  height: 100%;
`;
const CV1Right = styled.div`
  width: 65%;
  padding: 0 0 0 15px;
  color: #353451;
`;

const Img = styled.div`
  width: 150px;
  height: 140px;
  @media (max-width: 700px) {
    width: 100px;
    height: 90px;
  }
  @media (max-width: 500px) {
    width: 55px;
    height: 45px;
  }
`;

interface StateProps {
  firstName: string;
  lastName: string;
  occupation: string;
  summary: string;
  contact: Contact[];
  img: string | null;
  expertise: Val[];
  interests: Val[];
  languages: Val[];
  experience: Exp[];
  education: Edu[];
}

const CV1 = ({ state }: { state: StateProps }) => {
  return (
    <CVParent>
      <Cv1Left>
        {state.img && (
          <Img>
            <img
              src={state.img}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "9999px",
                paddingLeft: "10px",
              }}
            />
          </Img>
        )}
        {state.contact.length > 0 && (
          <Field title="Contact" things={state.contact} />
        )}
        {state.expertise.length > 0 && (
          <Field title="Expertise" things={state.expertise} />
        )}
        {state.interests.length > 0 && (
          <Field title="Interests" things={state.interests} />
        )}
        {state.languages.length > 0 && (
          <Field title="Languages" things={state.languages} />
        )}
      </Cv1Left>
      <CV1Right>
        <TopText
          firstName={state.firstName}
          lastName={state.lastName}
          occupation={state.occupation}
          summary={state.summary}
        />
        {state.experience.length > 0 && (
          <ExpField title="Experience" things={state.experience} />
        )}
        {state.education.length > 0 && (
          <EduField title="Education" things={state.education} />
        )}
      </CV1Right>
    </CVParent>
  );
};

export default CV1;
