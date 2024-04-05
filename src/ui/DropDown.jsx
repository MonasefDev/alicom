import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick";

const DropdownContext = createContext();

const Dropdown = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  const select = (item) => setSelected(item);

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggle, close, select, selected }}
    >
      <StyledDropdown $isOpen={isOpen}>{children}</StyledDropdown>
    </DropdownContext.Provider>
  );
};

const Select = ({ children, opens }) => {
  const { isOpen, toggle, close, select } = useContext(DropdownContext);
  const ref = useOutsideClick(close);
  return (
    <StyledSelect
      ref={ref}
      $isOpen={isOpen}
      onClick={() => {
        toggle();
        select(opens);
      }}
    >
      <SelectButton>{children}</SelectButton>
      <img
        className="icon"
        src={`/assets/icons/control/expand_more.svg`}
        alt="expand"
      />
    </StyledSelect>
  );
};

const List = ({ children, name }) => {
  const { isOpen, selected } = useContext(DropdownContext);

  if (selected !== name) return null;
  // Only render the children if the dropdown is open

  return <StyledList $isOpen={isOpen}>{children}</StyledList>;
};

const Item = ({ children, onChange }) => {
  const { close } = useContext(DropdownContext);
  return (
    <StyledItem
      onClick={() => {
        onChange();
        close();
      }}
    >
      {children}
    </StyledItem>
  );
};

// Extend the DropdownContext to include reusable components
Dropdown.Select = Select;
Dropdown.List = List;
Dropdown.Item = Item;

const StyledDropdown = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  span {
    font-size: 1.6rem;
    color: var(--color-gray-dark);
    font-weight: 500;
  }
  .icon {
    height: 2.4rem;
    transition: all 0.3s ease-in-out;
    transform: rotate(${(props) => (props.$isOpen ? "-180deg" : "0")});
  }
`;
const SelectButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: -1px;
  width: max-content;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  max-height: ${(props) => (props.$isOpen ? "25rem" : "0")};
  z-index: 999;
  border: ${(props) =>
    props.$isOpen
      ? "1px solid var(--color-gray-300)"
      : "1px solid transparent"};
  overflow-y: auto;
  background-color: var(--color-white);
  border-radius: 1rem;
  cursor: default;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 2rem;
  cursor: pointer;
  gap: 1rem;
  &:first-child {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export default Dropdown;
