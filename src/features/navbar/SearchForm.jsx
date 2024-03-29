import React, { useState } from "react";
import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

const SearchForm = ({ categories: categoriesArray, onSearch }) => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
    "All Categories",
    ...categoriesArray,
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useIsMobile();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(category, searchTerm);
  };

  return (
    <StyledSearchForm $isMobile={isMobile}>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <Select value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
        <Button type="submit">
          {isMobile ? (
            <img src="/assets/icons/control/search.svg" alt="search" />
          ) : (
            <span>Search</span>
          )}
        </Button>
      </Form>
      <SelectMobile>
        {categories.map((item) => (
          <OptionMobile
            className={item === category ? "active" : ""}
            selected={item === category}
            onClick={() => setCategory(item)}
            key={item}
          >
            {item}
          </OptionMobile>
        ))}
      </SelectMobile>
    </StyledSearchForm>
  );
};

const StyledSearchForm = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: ${(props) =>
      props.$isMobile
        ? "var(--navbar-height-mobile)"
        : "var(--navbar-height-desctop)"};
    background-color: var(--color-white);
    padding: 0 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 4rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  height: 100%;
  border-radius: 0;
  border: none;
  outline: none;
  border: 2px solid var(--color-blue-dark);
  border-left: 1px solid var(--color-blue-dark);
  background-color: var(--color-white);
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Option = styled.option`
  padding: 0.5rem;
`;

const Input = styled.input`
  padding: 8px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  border: 2px solid var(--color-blue-dark);
  border-right: 0;
  outline: none;
  flex: 1;
  @media only screen and (max-width: 768px) {
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    border-right: none;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  height: 100%;
  border-radius: 0 8px 8px 0;
  border: none;
  outline: none;
  background-color: var(--color-blue-dark);
  color: white;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    background-color: var(--color-gray-100);
    color: var(--color-blue-dark);
    border: 1px solid var(--color-gray-300);
    border-left: none;
    padding: 0.8rem 1rem;
  }
`;

const SelectMobile = styled.div`
  display: none;
  padding-bottom: 1.5rem;
  @media only screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 0.5rem;
  }
  .active {
    background-color: var(--color-blue-dark);
    color: white;
  }
`;

const OptionMobile = styled.div`
  white-space: nowrap;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background-color: var(--color-gray-200);
  color: var(--color-blue-dark);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default SearchForm;
