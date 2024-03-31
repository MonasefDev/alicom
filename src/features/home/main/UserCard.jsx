import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: var(--color-blue-light);
  border-radius: 8px;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 4.4rem; /* Adjust size as needed */
  height: 4.4rem;
`;

const GreetingText = styled.p`
  font-size: 1.4rem;
  line-height: 1;
`;

const ActionButton = styled.button`
  background: ${(props) =>
    props.primary ? "var(--color-blue-dark)" : "transparent"};
  color: ${(props) =>
    props.primary ? "var(--color-white)" : "var(--color-blue-dark)"};
  border: 1px solid
    ${(props) =>
      props.primary ? "var(--color-blue-dark)" : "var(--color-gray-500)"};
  border-radius: 5px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  width: 100%;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const UserCard = () => (
  <CardContainer>
    <ProfileContainer>
      <ProfileImage src="assets/icons/user-img.svg" alt="user" />
      <GreetingText>
        Hi, user
        <br />
        let’s get started
      </GreetingText>
    </ProfileContainer>
    <ActionButton primary>Join now</ActionButton>
    <ActionButton>Log in</ActionButton>
  </CardContainer>
);

export default UserCard;
