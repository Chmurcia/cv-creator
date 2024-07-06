import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import styled from "styled-components";

const StyledMenuButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;

interface MenuButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <StyledMenuButton onClick={onClick}>
      <CgMenuGridO size={35} />
    </StyledMenuButton>
  );
};
