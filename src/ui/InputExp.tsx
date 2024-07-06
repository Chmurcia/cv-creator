import styled from "styled-components";
// import { Button } from "./Button";
import { useState } from "react";
import { Action, Exp } from "../service/Services";
import { Button } from "./Button";
import { MdDelete, MdDone } from "react-icons/md";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 260px;
  gap: 4px;
`;
const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin: 0;
  @media (max-width: 500px) {
    width: 210px;
    height: 25px;
    margin-bottom: 4px;
  }
`;

const StyledTextArea = styled.textarea`
  height: 70px;
  width: 300px;
  border-radius: 0px;
  outline: none;
  margin: 0;
  border: none;
  border-radius: 10px;
  resize: none;
  @media (max-width: 500px) {
    width: 210px;
    height: 60px;
  }
`;

interface InputPropsExp {
  check: Exp[];
  maxLength: number;
  dispatch: React.Dispatch<Action>;
}

export const InputExp = ({ dispatch, maxLength, check }: InputPropsExp) => {
  const [position, setPosition] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [timeStart, setTimeStart] = useState<string>("");
  const [timeEnd, setTimeEnd] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (position && location && company && summary && timeStart && timeEnd) {
      if (!(check.length === maxLength)) {
        dispatch({
          type: "setExperiences",
          payload: { timeStart, timeEnd, position, location, company, summary },
        });
        setPosition("");
        setLocation("");
        setCompany("");
        setSummary("");
        setTimeStart("");
        setTimeEnd("");
      }
    }
  };

  return (
    <FormRow>
      <Button type="rounded" onClick={handleClick}>
        <MdDone />
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <StyledInput
          placeholder="Position"
          maxLength={35}
          onChange={(e) => setPosition(e.currentTarget.value)}
          value={position}
        />
        <StyledInput
          placeholder="Location"
          maxLength={29}
          onChange={(e) => setLocation(e.currentTarget.value)}
          value={location}
        />
        <StyledInput
          placeholder="Company"
          maxLength={29}
          onChange={(e) => setCompany(e.currentTarget.value)}
          value={company}
        />
        <StyledTextArea
          placeholder="Experience Summary"
          maxLength={400}
          onChange={(e) => setSummary(e.currentTarget.value)}
          value={summary}
        />
        <StyledInput
          placeholder="Time Start"
          onChange={(e) => setTimeStart(e.currentTarget.value)}
          type="date"
          value={timeStart}
        />
        <StyledInput
          placeholder="Time End"
          type="date"
          onChange={(e) => setTimeEnd(e.currentTarget.value)}
          value={timeEnd}
        />
      </div>

      <Button
        type="rounded"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          dispatch({ type: "resetExperiences" });
        }}
      >
        <MdDelete />
      </Button>
    </FormRow>
  );
};
