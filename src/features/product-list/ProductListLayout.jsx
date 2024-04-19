import styled from "styled-components";
import ProductList from "./ProductList";
import Sidebar from "./sidebar/Sidebar";

function ProductListLayout() {
  return (
    <StyledList>
      <BarPath>{`Home > Electronics > Smartphones`}</BarPath>
      <Container>
        <Sidebar />
        <ProductContainer>
          <BarFilter>Filter</BarFilter>
          <ProductList />
        </ProductContainer>
      </Container>
    </StyledList>
  );
}

const StyledList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const BarPath = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  height: 5.4rem;
  display: flex;
  align-items: center;
  background-color: var(--color-gray-100);
`;
const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: grid;
  grid-template-columns: 23rem 1fr;
  gap: 2rem;
`;

const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BarFilter = styled.div`
  width: 100%;
  height: 5.4rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
`;

export default ProductListLayout;
