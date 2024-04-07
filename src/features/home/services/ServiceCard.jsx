import styled from "styled-components";

function ServiceCard({ service }) {
  return (
    <StyledCard>
      <Banner $bgBanner={service.bgBanner}>
        <Icon src={service.icon} alt="icn" />
      </Banner>
      <p>{service.title}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 38rem;
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--color-gray-300);
  cursor: pointer;
  p {
    color: var(--color-gray-dark);
    font-weight: 500;
    margin-right: 5rem;
    padding: 2rem;
    @media only screen and (max-width: 1024px) {
      margin-right: 0;
      padding: 1.2rem;
    }
  }
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  background: url(${(props) => props.$bgBanner});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 1rem;
`;

const Icon = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0;
  right: 2.5rem;
  background-color: var(--color-blue-light);
  transform: translateY(50%);
  border-radius: 50%;
  padding: 1rem;
  border: 2px solid var(--color-white);
`;

export default ServiceCard;
