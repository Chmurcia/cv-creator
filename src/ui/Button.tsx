import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.2em;
  cursor: pointer;
`;

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  to: string;
};

export const Button = ({ children, type, to }: ButtonProps) => {
  switch (type) {
    case "big":
      return (
        <StyledButton
          to={to}
          style={{
            height: "50px",
            fontSize: "1.5em",
            padding: "0 20px 0 20px",
          }}
        >
          {children}
        </StyledButton>
      );
    case "small":
      return (
        <StyledButton
          to={to}
          style={{
            height: "30px",
            fontSize: "1.5em",
            padding: "0 5px 0 5px",
          }}
        >
          {children}
        </StyledButton>
      );
  }
};
