import styled from "styled-components";
import logoDark from "/assets/brand/logo-colored.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <StyledLogo to="/">
      <img src={logoDark} alt="logo" />
    </StyledLogo>
  );
}

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    height: 4.6rem;
    @media only screen and (max-width: 768px) {
      height: 3rem;
    }
  }
`;

export default Logo;
