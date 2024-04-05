import styled from "styled-components";
import Banner from "./SectionBanner";
import ProductCard from "./ProductCard";
import Button from "../../ui/Button";

function SectionContainer({ title, products, bgBanner }) {
  return (
    <StyledSectionContainer>
      <TitleMobile>{title}</TitleMobile>
      <Banner title={title} bgBanner={bgBanner} />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
      <ButtonContainer>
        <Button size="medium" variation="icon">
          Source Now
          <img
            src="assets/icons/control/arrow_forward_blue.svg"
            alt="arrow-right"
          />
        </Button>
      </ButtonContainer>
    </StyledSectionContainer>
  );
}

const StyledSectionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35rem 1fr;
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hiden;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--color-gray-300);
    border-radius: 0;
  }
`;

const TitleMobile = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-gray-dark);
    padding: 1.5rem;
  }
`;

const ProductsList = styled.div`
  border: 1px solid var(--color-gray-300);
  display: grid;
  border-radius: 0 8px 8px 0;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--color-gray-300);
  gap: 1px !important;
  grid-auto-rows: 0;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(9, 25rem);
    grid-template-rows: 1fr;
    width: 100%;
    overflow-x: auto;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;
const ButtonContainer = styled.div`
  display: none;
  width: 100%;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export default SectionContainer;
