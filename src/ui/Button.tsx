import React from "react";

import styled from "styled-components";

const StyledButtonBig = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  min-width: 300px;
  height: 50px;
  font-size: 1.5em;
  padding: 0 20px 0 20px;
  &:hover {
    transform: scale(1.1);
  }
`;
const StyledButtonSmall = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 9999px;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  min-width: 100px;
  height: 30px;
  font-size: 1em;
  padding: 0 10px 0 10px;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    width: 70px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const StyledSquareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #2ccea8;
  font-weight: 700;
  font-family: "Pragati Narrow";
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  color: #1c1c1c;
  transition: all 0.3s ease-in-out;
  min-width: 35px;
  min-height: 30px;
  font-size: 1em;
  padding: 0;
  margin: 0;
  border-radius: 10px;
  border: 1px solid rgb(28, 28, 28, 0.4);
`;

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ children, type, onClick }: ButtonProps) => {
  switch (type) {
    case "big":
      return <StyledButtonBig onClick={onClick}>{children}</StyledButtonBig>;
    case "small":
      return (
        <StyledButtonSmall onClick={onClick}>{children}</StyledButtonSmall>
      );
    case "rounded":
      return (
        <StyledSquareButton onClick={onClick}>{children}</StyledSquareButton>
      );
  }
};
