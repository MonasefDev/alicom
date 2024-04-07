import styled from "styled-components";
import Button from "../../../ui/Button";
import { useState } from "react";

function SectionSubscribe() {
  const [email, setEmail] = useState("");
  return (
    <StyledSection>
      <h4>Subscribe on our newsletter</h4>
      <p>
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <Form onSubmit={(e) => e.preventDefault()}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <Button variation="primary">Subscribe</Button>
      </Form>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  width: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--color-gray-200);
  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  input {
    width: 100%;
    max-width: 30rem;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: 1px solid var(--color-gray-300);
    outline: none;
    transition: all 0.2s ease-in-out;
    &:focus {
      border: 1px solid var(--color-blue-dark);
    }
  }
`;

export default SectionSubscribe;
