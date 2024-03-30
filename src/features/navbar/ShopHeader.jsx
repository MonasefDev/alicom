import { useState } from "react";
import styled from "styled-components";

function ShopHeader({ countries }) {
  const [country, setCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (item) => {
    setCountry(item);
    setIsOpen(false);
  };
  return (
    <StyledShop>
      <Select $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>Ship to</span>
        <img src={country.flag} alt={country.name} />
        <img
          className="icon"
          src={`/assets/icons/control/expand_more.svg`}
          alt="expand"
        />
      </Select>
      <Options $isOpen={isOpen}>
        {countries.map((item) => (
          <div key={item.name} onClick={() => onChange(item)}>
            <img src={item.flag} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </Options>
    </StyledShop>
  );
}

const StyledShop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  span {
    font-size: 1.6rem;
    color: var(--color-gray-dark);
    font-weight: 500;
  }
  img {
    height: 1.6rem;
  }
  .icon {
    height: 2.4rem;
    transition: all 0.3s ease-in-out;
    transform: rotate(${(props) => (props.$isOpen ? "-180deg" : "0")});
  }
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 1.2rem;
  width: max-content;
  transition: all 0.3s ease-in-out;
  max-height: ${(props) => (props.$isOpen ? "25rem" : "0")};
  border: ${(props) =>
    props.$isOpen
      ? "1px solid var(--color-gray-300)"
      : "1px solid transparent"};
  overflow-y: auto;
  background-color: var(--color-white);
  border-radius: 1rem;
  cursor: default;
  div {
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
    img {
      height: 1.6rem;
    }
    &:hover {
      background-color: var(--color-gray-200);
    }
  }
  /* &::before {
    content: "";
    position: absolute;
    top: -1.2rem;
    right: 3.1rem;
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-bottom: 1.1rem solid var(--color-gray-300);
  } */
`;

export default ShopHeader;
