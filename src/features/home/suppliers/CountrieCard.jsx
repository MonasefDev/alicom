import styled from "styled-components";

function CountrieCard({ countrie }) {
  return (
    <StyledCard>
      <img src={countrie.flag} alt="flag" />
      <Info>
        <p>{countrie.name}</p>
        <span>{countrie.url}</span>
      </Info>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  background-color: var(--color-white);
  padding: 0.5rem;
  border: 1px solid var(--color-gray-300);
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
  img {
    width: 2.8rem;
  }
  &:hover {
    background-color: var(--color-blue-light);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  p {
    color: var(--color-gray-dark);
  }
  span {
    color: var(--color-gray-500);
    font-size: 1.3rem;
  }
`;

export default CountrieCard;
