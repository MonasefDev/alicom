import React, { useState } from "react";
import styled from "styled-components";

const RangePrice = ({ min = 0, max = 9999 }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentValue1, setCurrentValue1] = useState(min);
  const [currentValue2, setCurrentValue2] = useState(max);
  const minGap = 3;

  const handleSlideOne = (event) => {
    const value = Math.min(
      parseInt(event.target.value),
      currentValue2 - minGap
    );
    setCurrentValue1(value);
  };

  const handleSlideTwo = (event) => {
    const value = Math.max(
      parseInt(event.target.value),
      currentValue1 + minGap
    );
    setCurrentValue2(value);
  };

  const percent1 = (currentValue1 / max) * 100;
  const percent2 = (currentValue2 / max) * 100;

  return (
    <StyledRangePrice>
      <Title $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <h5>Range Price</h5>
        <img src="assets/icons/control/chevron_right.svg" alt="arrow-right" />
      </Title>
      {isOpen && (
        <Wrapper>
          <Container>
            <Track $percent1={percent1} $percent2={percent2} />
            <InputRange
              type="range"
              min={min}
              max={max}
              value={currentValue1}
              onChange={handleSlideOne}
            />
            <InputRange
              type="range"
              min={min}
              max={max}
              value={currentValue2}
              onChange={handleSlideTwo}
            />
          </Container>
          <InputContainer>
            <InputNumber>
              <label>Min</label>
              <Input
                type="number"
                min={min}
                max={max}
                placeholder={min}
                value={currentValue1}
                onChange={handleSlideOne}
              />
            </InputNumber>
            <InputNumber>
              <label>Max</label>
              <Input
                type="number"
                min={min}
                max={max}
                placeholder={max}
                value={currentValue2}
                onChange={handleSlideTwo}
              />
            </InputNumber>
          </InputContainer>
          <Button>Apply</Button>
        </Wrapper>
      )}
    </StyledRangePrice>
  );
};

const StyledRangePrice = styled.div`
  position: relative;
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

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const InputRange = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  background-color: transparent;
  pointer-events: none;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 0px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 2rem;
    width: 2rem;
    background-color: var(--color-white);
    border: 2px solid #afd0ff;
    cursor: pointer;
    border-radius: 50%;
    pointer-events: auto;
    margin-top: -1rem;
    pointer-events: auto;
    transition: all 0.1s ease-in-out;
  }
  &:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 4px rgba(175, 208, 255, 0.4);
  }
`;

const Track = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  background: ${({ $percent1, $percent2 }) => `linear-gradient(
        to right,
        #AFD0FF ${$percent1}%,
        var(--color-blue-dark) ${$percent1}%,
        var(--color-blue-dark) ${$percent2}%,
        #AFD0FF ${$percent2}%
    )`};
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const InputNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 5px;
  outline: none;
  outline: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: 1px solid var(--color-blue-dark);
    border: 1px solid var(--color-blue-dark);
  }
`;

const Button = styled.button`
  width: 100%;
  color: var(--color-blue-dark);
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-weight: 500;
  border: 1px solid var(--color-gray-300);
  box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-white);
    background-color: var(--color-blue-dark);
  }
`;

export default RangePrice;
