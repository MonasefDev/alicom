import styled from "styled-components";
import Logo from "./Logo";
import Actions from "./Actions";
import SearchForm from "./SearchForm";
import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import SidebarMobile from "./SidebarMobile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <StyledNavbar>
      <ContentWrapper>
        <BurgerIcon
          onClick={() => setIsOpen(!isOpen)}
          src="/assets/icons/control/menu.svg"
          alt="menu"
        />
        <Logo />
        <SearchForm
          categories={[
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing",
          ]}
        />
        <Actions />
        <SidebarMobile onClose={() => setIsOpen(false)} isOpen={isOpen} />
      </ContentWrapper>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  background-color: var(--color-white);
`;

const BurgerIcon = styled.img`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    &:hover {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(175deg);
    }
  }
`;

const ContentWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--navbar-height-desctop);
  padding: 0 2rem;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 6rem;
    grid-template-columns: 1fr max-content;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: max-content 1fr max-content;
    gap: 1rem;
    height: var(--navbar-height-mobile);
    margin-bottom: 11rem;
  }
`;

export default Navbar;
