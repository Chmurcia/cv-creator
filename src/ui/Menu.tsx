import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  width: 300px;
  height: 100%;
  right: 0;
  border: 1px solid rgb(28, 28, 28, 0.3);
  background-color: #ffffff;
  position: absolute;
  z-index: 99;
`;

const List = styled.li`
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ListEl = styled.ul`
  list-style-type: none;
  font-size: 2rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
  a {
    text-decoration: none;
    color: #1c1c1c;
  }
`;

interface MenuProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({ setShow }: MenuProps) => {
  return (
    <StyledMenu>
      <List>
        <ListEl>
          <Link to="/home" onClick={() => setShow((show) => !show)}>
            Home
          </Link>
        </ListEl>
        <ListEl>
          <Link to="/rules" onClick={() => setShow((show) => !show)}>
            Rules of CV
          </Link>
        </ListEl>
        <ListEl>
          <Link to="/editor" onClick={() => setShow((show) => !show)}>
            Editor
          </Link>
        </ListEl>
      </List>
    </StyledMenu>
  );
};
