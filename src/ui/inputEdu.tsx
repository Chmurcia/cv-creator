import styled from "styled-components";
// import { Button } from "./Button";
import { useState } from "react";
import { Action, Edu } from "../service/Services";
import { Button } from "./Button";
import { MdDelete, MdDone } from "react-icons/md";

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 105px;
  gap: 4px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 10px;
  border: none;
  margin: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    appearance: textfield;
  }
  @media (max-width: 500px) {
    width: 210px;
    height: 25px;
  }
`;

interface InputPropsEdu {
  check: Edu[];
  maxLength: number;
  dispatch: React.Dispatch<Action>;
}

export const InputEdu = ({ dispatch, maxLength, check }: InputPropsEdu) => {
  const [year, setYear] = useState<string>("");
  const [degree, setDegree] = useState<string>("");
  const [place, setPlace] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (year && degree && place) {
      if (!(check.length === maxLength)) {
        dispatch({
          type: "setEducation",
          payload: { year, degree, place },
        });
        setYear("");
        setDegree("");
        setPlace("");
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
          placeholder="Year"
          maxLength={4}
          onChange={(e) => setYear(e.currentTarget.value)}
          value={year}
        />
        <StyledInput
          placeholder="Degree"
          maxLength={30}
          onChange={(e) => setDegree(e.currentTarget.value)}
          value={degree}
        />
        <StyledInput
          placeholder="Place"
          maxLength={50}
          onChange={(e) => setPlace(e.currentTarget.value)}
          value={place}
        />
      </div>

      <Button
        type="rounded"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          dispatch({ type: "resetEducation" });
        }}
      >
        <MdDelete />
      </Button>
    </FormRow>
  );
};
