import React from "react";
import styled from "styled-components";

const Card = styled.div`
  min-width: 18rem;
  width: 18rem;
  background-color: var(--color-white);
  padding: 2rem;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 14rem;
`;

const DiscountLabel = styled.span`
  background-color: var(--color-red-light);
  color: var(--color-red);
  padding: 0.25rem 2rem;
  border-radius: 50px;
`;

const DiscountItem = ({ product }) => {
  return (
    <Card>
      <Image src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <DiscountLabel>{`-${product.discount}%`}</DiscountLabel>
    </Card>
  );
};

export default DiscountItem;
