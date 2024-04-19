import React, { useState } from "react";
import styled from "styled-components";

const StyledCondition = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-gray-300);
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

const Container = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  margin-right: 10px;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
`;

const ConditionFilter = ({ options, title }) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <StyledCondition>
      <Title $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h5>{title}</h5>
        <img src="assets/icons/control/chevron_right.svg" alt="arrow-right" />
      </Title>
      {isOpen && (
        <Container>
          {options.map((option) => (
            <Label key={option}>
              <RadioButton
                checked={selected === option}
                onChange={handleChange}
                value={option}
              />
              {option}
            </Label>
          ))}
        </Container>
      )}
    </StyledCondition>
  );
};

export default ConditionFilter;
