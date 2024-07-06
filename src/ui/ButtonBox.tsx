import styled from "styled-components";
import { Action } from "../service/Services";
import { Button } from "./Button";
import { ButtonLink } from "./ButtonLink";
import { PhotoUpload } from "./PhotoUpload";

const StyledButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 5px 0;
  width: 100%;
`;

interface ButtonBoxProps {
  handleFileSelect: (file: File) => void;
  dispatch: React.Dispatch<Action>;
}

export const ButtonBox = ({ handleFileSelect, dispatch }: ButtonBoxProps) => {
  return (
    <StyledButtonsBox>
      <ButtonLink type="small" to="/home">
        Go back
      </ButtonLink>
      <PhotoUpload onFileSelect={handleFileSelect} />

      <Button type="small" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </Button>
    </StyledButtonsBox>
  );
};
