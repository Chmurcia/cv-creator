import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtonBig = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 300px;
  height: 50px;
  font-size: 1.5em;
  padding: 0 20px 0 20px;
  border-radius: 9999px;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    width: 240px;
    height: 40px;
    font-size: 1rem;
  }
`;

const StyledButtonSmall = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100px;
  height: 30px;
  font-size: 0.9em;
  padding: 0 20px 0 20px;
  border-radius: 9999px;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    width: 90px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

type ButtonLinkProps = {
  children: React.ReactNode;
  type: string;
  to: string;
};

export const ButtonLink = ({ children, type, to }: ButtonLinkProps) => {
  switch (type) {
    case "big":
      return <StyledButtonBig to={to}>{children}</StyledButtonBig>;
    case "small":
      return <StyledButtonSmall to={to}>{children}</StyledButtonSmall>;
  }
};
