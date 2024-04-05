import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <StyledCountDown>
      <div>
        <h4>Deals and offers</h4>
        <p>Hygiene equipments</p>
      </div>
      <CountdownContainer>
        {Object.keys(timeLeft).map((interval) => (
          <TimeBlock key={interval}>
            <TimeNumber>{timeLeft[interval]}</TimeNumber>
            <TimeText>
              {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </TimeText>
          </TimeBlock>
        ))}
      </CountdownContainer>
    </StyledCountDown>
  );
};

const StyledCountDown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
  }
`;

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TimeBlock = styled.div`
  background-color: var(--color-gray-500);
  border-radius: 5px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  @media only screen and (max-width: 768px) {
    margin-top: 0;
    padding: 0.5rem 1rem;
  }
`;

const TimeNumber = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1;
`;

const TimeText = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

export default CountdownTimer;
