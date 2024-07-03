import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "./Logo";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  padding: 0 20px 0 20px;
  background-color: rgb(255, 255, 255);
`;
const List = styled.li`
  display: flex;
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

export const Nav = () => {
  return (
    <StyledNav>
      <Logo />
      <List>
        <ListEl>
          <Link to="/home">Home</Link>
        </ListEl>
        <ListEl>
          <Link to="/rules">Rules of CV</Link>
        </ListEl>
        <ListEl>
          <Link to="/editor">Editor</Link>
        </ListEl>
      </List>
    </StyledNav>
  );
};
