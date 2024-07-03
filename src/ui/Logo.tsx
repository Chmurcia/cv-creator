import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 9999px;
  background-color: #1c1c1c;
  cursor: pointer;
`;

export const Logo = () => {
  const navigate = useNavigate();
  return <StyledLogo onClick={() => navigate("/home")}></StyledLogo>;
};
