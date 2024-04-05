import React from "react";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductName>{product.name}</ProductName>
      <ProductInfo>
        <ProductPrice>
          From <br /> {product.price} USD
        </ProductPrice>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ProductInfo>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  padding: 2rem 0.6rem 0.6rem 1.5rem;
  background-color: var(--color-white);
  cursor: pointer;
  /* border: 1px solid var(--color-gray-300); */
  height: max-content;
`;

const ProductName = styled.div`
  font-size: 1.6rem;
  color: var(--color-gray-dark);
  font-weight: 400;
  line-height: 1.5;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ProductImage = styled.img`
  width: auto; /* Adjust size as needed */
  height: 7rem;
  margin-right: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.3rem;
  color: var(--color-gray-500);
  line-height: 1.5;
  font-weight: 400;
`;

export default ProductCard;
