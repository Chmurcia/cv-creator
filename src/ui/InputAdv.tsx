import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { Action, Contact } from "../service/Services";
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

interface InputAdvProps {
  placeholder: string;
  maxLength: number;
  maxThings: number;
  check: number | Contact | undefined;
  btnValueType: string;
  type:
    | "setExpertise"
    | "setPhone"
    | "setEmail"
    | "setAddress"
    | "setInterests"
    | "setLanguages";
  reset:
    | "resetExpertise"
    | "resetPhone"
    | "resetEmail"
    | "resetAddress"
    | "resetInterests"
    | "resetLanguages";
  dispatch: React.Dispatch<Action>;
}

export const InputAdv = ({
  placeholder,
  maxLength,
  maxThings,
  check,
  btnValueType,
  type,
  reset,
  dispatch,
}: InputAdvProps) => {
  const [value, setValue] = useState<string>("");

  return (
    <FormRow>
      <Button
        type="rounded"
        onClick={(e) => {
          e.preventDefault();
          if (value) {
            if (
              type === "setPhone" ||
              type === "setEmail" ||
              type === "setAddress"
            ) {
              if (!check) {
                dispatch({ type: type, payload: value });
                setValue("");
              }
            } else {
              if (!(check === maxThings)) {
                dispatch({ type: type, payload: { value: value } });
                setValue("");
              }
            }
          }
        }}
      >
        <MdDone />
      </Button>
      <StyledInput
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => setValue(e.currentTarget.value)}
        value={value}
        type={btnValueType}
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
