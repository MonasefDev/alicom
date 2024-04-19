import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  border-bottom: 1px solid var(--color-gray-300);
  button {
    background-color: transparent;
    border: none;
    width: max-content;
    color: var(--color-blue-dark);
    padding: 0.4rem 1rem;
    opacity: 0.8;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const SelectItem = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.2rem;
  width: 2.2rem;
  background-color: transparent;
  border: 2px solid var(--color-gray-300);
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${Checkmark} {
    background-color: var(--color-blue-dark);
    border: 2px solid var(--color-blue-dark);
    &:after {
      display: block;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.1s ease-in-out;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "-90deg" : "90deg")});
  }
`;

const ListSelect = ({ list, title, setSelectedItems, selectedItems }) => {
  const [showList, setShowList] = useState(true);
  const [listToShow, setListToShow] = useState(list.slice(0, 4));

  useEffect(() => {
    setListToShow(listToShow.length < list.length ? list.slice(0, 4) : list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const onShow = () => {
    listToShow.length < list.length
      ? setListToShow(list)
      : setListToShow(list.slice(0, 4));
  };

  const onCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, e.target.value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== e.target.value));
    }
  };
  return (
    <StyledSelect>
      <Title $isOpen={showList} onClick={() => setShowList(!showList)}>
        <h5>{title}</h5>
        <img src="assets/icons/control/chevron_right.svg" alt="arrow-right" />
      </Title>
      {showList && (
        <>
          {listToShow.map((item) => (
            <SelectItem key={item}>
              {item}
              <Checkbox
                value={item}
                checked={selectedItems.includes(item)}
                onChange={(e) => onCheckboxChange(e)}
              />
              <Checkmark />
            </SelectItem>
          ))}
          <button onClick={onShow}>
            {listToShow.length < list.length ? "Show more" : "Show less"}
          </button>
        </>
      )}
    </StyledSelect>
  );
};

export default ListSelect;
