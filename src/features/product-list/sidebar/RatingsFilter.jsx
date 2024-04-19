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
  display: flex;
  flex-direction: column-reverse;
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
  display: flex;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const RatingsFilter = ({ options, title }) => {
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const ArrayRatings = Array.from({ length: 5 }, (v, i) => i);

  return (
    <StyledCondition>
      <Title $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h5>Ratings</h5>
        <img src="assets/icons/control/chevron_right.svg" alt="arrow-right" />
      </Title>
      {isOpen && (
        <Container>
          {ArrayRatings.map((rate, index) => (
            <Label key={rate}>
              <RadioButton
                checked={+selected === +rate}
                onChange={handleChange}
                value={index}
              />
              {ArrayRatings.map((_, i) => (
                <img
                  key={"star" + i}
                  src={`assets/icons/star_${
                    i <= index ? "orange" : "gray"
                  }.svg`}
                  alt="star"
                />
              ))}
            </Label>
          ))}
        </Container>
      )}
    </StyledCondition>
  );
};

export default RatingsFilter;
