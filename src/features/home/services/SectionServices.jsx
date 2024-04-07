import styled from "styled-components";
import ServiceCard from "./ServiceCard";

function SectionServices({ services }) {
  return (
    <StyledServices>
      <h3>Our extra services</h3>
      <ServicesContainer>
        {services.map((item) => (
          <ServiceCard key={item.id} service={item} />
        ))}
      </ServicesContainer>
    </StyledServices>
  );
}

const StyledServices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default SectionServices;
