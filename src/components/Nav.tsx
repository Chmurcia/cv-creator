import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../ui/Logo";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MenuButton } from "../ui/MenuButton";

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
  border: 1px solid rgb(28, 28, 28, 0.3);
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

interface NavProps {
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const Nav = ({ setShow }: NavProps) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();
  const isEditor = location.pathname === "/editor";

  if (!isEditor) {
    return (
      <StyledNav>
        <Logo />
        {width > 600 ? (
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
        ) : (
          <MenuButton onClick={() => setShow((show) => !show)} />
        )}
      </StyledNav>
    );
  }
};
