import styled from "styled-components";
import Logo from "./Logo";
import Actions from "./Actions";
import SearchForm from "./SearchForm";

function Navbar() {
  return (
    <StyledNavbar>
      <ContentWrapper>
        <BurgerIcon src="/assets/icons/control/menu.svg" alt="menu" />
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
    height: 2.4rem;
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
