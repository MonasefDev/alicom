import styled from "styled-components";
import CountdownTimer from "./CountDown";
import { productsDiscount } from "../../../data/product-data";
import DiscountItem from "./DiscountItem";

function SaleSection() {
  return (
    <StyledSaleSAection>
      <CountdownTimer targetDate="2024-04-07T23:59:59" />
      <DiscountList>
        {productsDiscount.map((product) => (
          <DiscountItem key={product.id} product={product} />
        ))}
      </DiscountList>
    </StyledSaleSAection>
  );
}

const StyledSaleSAection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35rem 1fr;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  overflow: hiden;
  @media only screen and (max-width: 768px) {
    border-radius: 0;
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

const DiscountList = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  border-left: 1px solid var(--color-gray-300);

  & > div {
    border-left: 1px solid var(--color-gray-300);
    &:first-child {
      border-left: none;
    }
  }
  @media only screen and (max-width: 768px) {
    border-top: 1px solid var(--color-gray-300);
    border-bottom: 1px solid var(--color-gray-300);
    border-radius: 0;
  }
`;

export default SaleSection;
