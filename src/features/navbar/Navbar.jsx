import styled from "styled-components";
import Logo from "./Logo";
import Actions from "./Actions";
import SearchForm from "./SearchForm";
import SidebarMobile from "./SidebarMobile";
import CategoriesHeader from "./CategoriesHeader";
import ShopHeader from "./ShopHeader";
import { countries } from "../../data/product-data";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const currencies = [
  {
    code: "USD",
    label: "US Dollar",
    symbol: "$",
  },
  {
    code: "EUR",
    label: "Euro",
    symbol: "€",
  },
  {
    code: "JPY",
    label: "Japanese Yen",
    symbol: "¥",
  },
  {
    code: "GBP",
    label: "British Pound",
    symbol: "£",
  },
  {
    code: "AUD",
    label: "Australian Dollar",
    symbol: "A$",
  },
];
function Navbar({ isOpen, setIsOpen }) {
  return (
    <StyledNavbar>
      <NavbarContainer>
        <BurgerIcon
          onClick={() => setIsOpen(!isOpen)}
          src="/assets/icons/control/menu.svg"
          alt="menu"
        />
        <Logo />
        <SearchForm categories={categories} />
        <Actions />
        <SidebarMobile onClose={() => setIsOpen(false)} isOpen={isOpen} />
      </NavbarContainer>
      <Header>
        <ContentWrapper>
          <CategoriesHeader categories={categories} />
          <ShopHeader currencies={currencies} countries={countries} />
        </ContentWrapper>
      </Header>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;
  background-color: var(--color-white);
`;

const BurgerIcon = styled.img`
  display: none;
  line-height: 1;
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

const NavbarContainer = styled.div`
  position: relative;
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

const Header = styled.div`
  width: 100%;
  height: var(--navbar-height-mobile);
  border-top: 1px solid var(--color-gray-300);
  border-bottom: 1px solid var(--color-gray-300);
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export default Navbar;
