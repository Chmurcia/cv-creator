import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { Action } from "../service/Services";
import { MdDelete, MdDone } from "react-icons/md";

const StyledTextArea = styled.textarea`
  height: 70px;
  width: 300px;
  border-radius: 10px;
  outline: none;
  margin: 0;
  border: 1px solid rgb(28, 28, 28, 0.4);
  resize: none;
  @media (max-width: 500px) {
    width: 210px;
    height: 60px;
    margin-bottom: 4px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 4px;
`;

interface TextAreaProps {
  placeholder: string;
  maxLength: number;
  type: "setSummary";
  reset: "resetSummary";
  dispatch: React.Dispatch<Action>;
}

export const TextArea = ({
  placeholder,
  maxLength,
  type,
  reset,
  dispatch,
}: TextAreaProps) => {
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
      <StyledTextArea
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
