import styled from "styled-components";
import ProductCard from "./ProductCard";

function SectionRecommend({ products }) {
  return (
    <StyledRecommand>
      <h3>Recommended Items</h3>
      <ProductList>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </ProductList>
    </StyledRecommand>
  );
}

const StyledRecommand = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  @media only screen and (max-width: 1024px) {
    gap: 1rem;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-auto-rows: 0;
    overflow: hidden;
    margin-bottom: -2rem;
  }
`;

export default SectionRecommend;
