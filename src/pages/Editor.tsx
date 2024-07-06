import styled from "styled-components";
import CV1 from "../ui/CV/CV1";
import { useEffect, useReducer, useState } from "react";
import { Action, State } from "../service/Services";
import { ButtonLink } from "../ui/ButtonLink";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { TextArea } from "../ui/TextArea";
import { InputAdv } from "../ui/InputAdv";
import { PhotoUpload } from "../ui/PhotoUpload";
import { InputExp } from "../ui/InputExp";
import { InputEdu } from "../ui/inputEdu";

const Site = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10%;
  height: 100dvh;
  overflow-x: hidden;
`;
const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px 0;
  width: 100%;
`;
// Inputs

const InputsArea = styled.div`
  width: 400px;
  height: 900px;
  background-color: #353451;
  border: 1px solid #1c1c1c;
  @media (max-width: 500px) {
    width: 300px;
    height: 750px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  padding: 10px 0 10px 0;
`;

const Title = styled.p`
  text-align: center;
  color: #ffffff;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;

// CV
const CV = styled.div`
  width: 700px;
  height: 950px;
  background-color: #ffffff;
  border: 1px solid #1c1c1c;
  font-family: "Open sans", sans-serif;
  letter-spacing: 0.02rem;

  @media (max-width: 700px) {
    width: 500px;
    height: 700px;
  }

  @media (max-width: 500px) {
    width: 350px;
    height: 500px;
  }
`;

// useReducer

const InitialState: State = {
  firstName: "",
  lastName: "",
  occupation: "",
  summary: "",
  contact: [],
  img: null,
  expertise: [],
  interests: [],
  languages: [],
  experience: [],
  education: [],
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        firstName: "",
        lastName: "",
        occupation: "",
        summary: "",
        contact: [],
        img: null,
        expertise: [],
        interests: [],
        languages: [],
        experience: [],
        education: [],
      };
    case "setFirstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "resetFirstName":
      return {
        ...state,
        firstName: "",
      };
    case "setLastName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "resetLastName":
      return {
        ...state,
        lastName: "",
      };
    case "setOccupation":
      return {
        ...state,
        occupation: action.payload,
      };
    case "resetOccupation":
      return {
        ...state,
        occupation: "",
      };
    case "setSummary":
      return {
        ...state,
        summary: action.payload,
      };
    case "resetSummary":
      return {
        ...state,
        summary: "",
      };
    case "setImg":
      return {
        ...state,
        img: action.payload,
      };
    case "setPhone":
      return {
        ...state,
        contact: [...state.contact, { name: "Phone", value: action.payload }],
      };
    case "resetPhone":
      return {
        ...state,
        contact: state.contact.filter((obj) => !(obj.name === "Phone")),
      };
    case "setEmail":
      return {
        ...state,
        contact: [...state.contact, { name: "Email", value: action.payload }],
      };
    case "resetEmail":
      return {
        ...state,
        contact: state.contact.filter((obj) => !(obj.name === "Email")),
      };
    case "setAddress":
      return {
        ...state,
        contact: [...state.contact, { name: "Address", value: action.payload }],
      };
    case "resetAddress":
      return {
        ...state,
        contact: state.contact.filter((obj) => !(obj.name === "Address")),
      };
    case "setExpertise":
      return {
        ...state,
        expertise: [...state.expertise, action.payload],
      };
    case "resetExpertise":
      return {
        ...state,
        expertise: [],
      };
    case "setInterests":
      return {
        ...state,
        interests: [...state.interests, action.payload],
      };
    case "resetInterests":
      return {
        ...state,
        interests: [],
      };
    case "setLanguages":
      return {
        ...state,
        languages: [...state.languages, action.payload],
      };
    case "resetLanguages":
      return {
        ...state,
        languages: [],
      };
    case "setExperiences":
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case "resetExperiences":
      return {
        ...state,
        experience: [],
      };
    case "setEducation":
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case "resetEducation":
      return {
        ...state,
        education: [],
      };
    default:
      throw new Error("Unknown action");
  }
}

const Editor = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: "setImg", payload: reader.result as string });
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImageUrl(null);
      dispatch({ type: "setImg", payload: null });
    }
  }, [selectedFile, imageUrl]);

  return (
    <Site>
      <div>
        <ButtonsBox>
          <ButtonLink type="small" to="/home">
            Go back
          </ButtonLink>
          <PhotoUpload onFileSelect={handleFileSelect} />

          <Button type="small" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </Button>
        </ButtonsBox>
        <InputsArea>
          <Form>
            <Title>Current Informations</Title>
            <Input
              placeholder="First Name"
              maxLength={15}
              type="setFirstName"
              reset="resetFirstName"
              dispatch={dispatch}
            />
            <Input
              placeholder="Last Name"
              maxLength={20}
              type="setLastName"
              reset="resetLastName"
              dispatch={dispatch}
            />
            <Input
              placeholder="Occupation"
              maxLength={20}
              type="setOccupation"
              reset="resetOccupation"
              dispatch={dispatch}
            />
            <TextArea
              placeholder="Summary"
              maxLength={250}
              type="setSummary"
              reset="resetSummary"
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Phone"
              maxLength={14}
              maxThings={3}
              btnValueType="tel"
              type="setPhone"
              reset="resetPhone"
              check={state.contact.find((obj) => obj.name === "Phone")}
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Email"
              maxLength={35}
              maxThings={3}
              btnValueType="email"
              type="setEmail"
              reset="resetEmail"
              check={state.contact.find((obj) => obj.name === "Email")}
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Address"
              maxLength={30}
              maxThings={3}
              btnValueType="text"
              type="setAddress"
              reset="resetAddress"
              check={state.contact.find((obj) => obj.name === "Address")}
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Expertise"
              maxLength={20}
              maxThings={5}
              btnValueType="text"
              type="setExpertise"
              reset="resetExpertise"
              check={state.expertise.length}
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Interests"
              maxLength={20}
              maxThings={3}
              btnValueType="text"
              type="setInterests"
              reset="resetInterests"
              check={state.interests.length}
              dispatch={dispatch}
            />
            <InputAdv
              placeholder="Languages"
              maxLength={20}
              maxThings={3}
              btnValueType="text"
              type="setLanguages"
              reset="resetLanguages"
              check={state.languages.length}
              dispatch={dispatch}
            />
            <Title>Experience</Title>
            <InputExp
              dispatch={dispatch}
              check={state.experience}
              maxLength={3}
            />
            <Title>Education</Title>
            <InputEdu
              dispatch={dispatch}
              check={state.education}
              maxLength={2}
            />
          </Form>
        </InputsArea>
      </div>
      <CV>
        <CV1 state={state} />
      </CV>
    </Site>
  );
};

export default Editor;
