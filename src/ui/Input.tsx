import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { Action } from "../service/Services";
import { MdDelete, MdDone } from "react-icons/md";

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
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 4px;
`;

interface InputProps {
  placeholder: string;
  maxLength: number;
  type: "setFirstName" | "setLastName" | "setOccupation";
  reset: "resetFirstName" | "resetLastName" | "resetOccupation";
  dispatch: React.Dispatch<Action>;
}

export const Input = ({
  placeholder,
  maxLength,
  type,
  reset,
  dispatch,
}: InputProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <FormRow>
      <Button
        type="rounded"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: type, payload: value });
          setValue("");
        }}
      >
        <MdDone />
      </Button>
      <StyledInput
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
      />
      <Button
        type="rounded"
        onClick={(e) => {
          e.preventDefault();
          dispatch({ type: reset });
          setValue("");
        }}
      >
        <MdDelete />
      </Button>
    </FormRow>
  );
};
