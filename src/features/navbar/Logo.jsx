import styled from "styled-components";
import logoDark from "/assets/brand/logo-colored.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <StyledLogo src={logoDark} />
    </Link>
  );
}

const StyledLogo = styled.img`
  height: 4.6rem;
  @media only screen and (max-width: 768px) {
    height: 3.6rem;
  }
`;

export default Logo;
