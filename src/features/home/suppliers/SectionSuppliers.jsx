import styled from "styled-components";
import CountrieCard from "./CountrieCard";

function SectionSuppliers({ countries }) {
  return (
    <StyledSuppliers>
      <h3>Suppliers by region</h3>
      <List>
        {countries.map((item) => (
          <CountrieCard key={item.name} countrie={item} />
        ))}
      </List>
    </StyledSuppliers>
  );
}

const StyledSuppliers = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default SectionSuppliers;
