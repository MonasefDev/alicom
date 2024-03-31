import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  font-size: 24px;
  cursor: pointer;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

const NavItem = styled.li`
  padding: 16px;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: var(--color-gray-dark);
  font-weight: 500;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const CategoriesHeader = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <Icon src="/assets/icons/control/menu.svg" />
          <span>All categories</span>
        </NavItem>
        <NavItem>Hot offers</NavItem>
        <NavItem>Gift boxes</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Menu item</NavItem>
        <NavItem>
          <span>Help</span>
          <Icon src="/assets/icons/control/expand_more.svg" />
        </NavItem>
      </NavList>
    </NavBar>
  );
};

export default CategoriesHeader;
