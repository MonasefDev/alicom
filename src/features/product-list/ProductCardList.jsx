import React, { useState } from "react";
import styled from "styled-components";
import RatingBox from "./RatingBox";
// import { ReactComponent as HeartIcon } from "assets/icons/control/heart.svg"; // Path to your heart icon SVG

const CardContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
`;

const ProductImage = styled.img`
  width: auto;
  height: 21rem;
  margin-right: 20px;
`;

const ProductInfo = styled.div`
  flex-grow: 1;
`;

const Title = styled.h5`
  margin-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const OriginalPrice = styled.span`
  font-size: 1.6rem;
  color: var(--color-gray-500);
  text-decoration: line-through;
`;

const Rating = styled.span`
  font-size: 1.6rem;
  color: var(--color-orange-darker);
`;

const Dote = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: var(--color-gray-300);
  align-self: center;
`;

const Orders = styled.span`
  color: var(--color-gray-500);
`;

const Shipping = styled.span`
  color: var(--color-green-dark);
`;

const Description = styled.p`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 45rem;
`;

const ViewDetailsButton = styled.button`
  color: var(--color-blue-dark);
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  opacity: 0.8;
  transform: translateY(0);
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

const FavoritingButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  img {
    height: 3rem;
  }
`;

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    console.log(isFavorite ? "Remove from favorites" : "Add to favorites");
    setIsFavorite(!isFavorite);
  };

  return (
    <CardContainer>
      <ProductImage src={product.poster} alt={product.title} />
      <ProductInfo>
        <Title>{product.name}</Title>
        <FlexContainer>
          <h4>${product.price.toFixed(2)}</h4>
          <OriginalPrice>${product.originalPrice.toFixed(2)}</OriginalPrice>
        </FlexContainer>
        <FlexContainer>
          <RatingBox rating={product.rating} />
          <Rating>{(product.rating * 2).toFixed(1)}</Rating>
          <Dote />
          <Orders>{product.orders} orders</Orders>
          <Dote />
          <Shipping>{product.shipping}</Shipping>
        </FlexContainer>
        <Description>{product.description}</Description>
        <ViewDetailsButton onClick={() => console.log("View details")}>
          View details
        </ViewDetailsButton>
      </ProductInfo>
      <FavoritingButton onClick={toggleFavorite}>
        <img
          src={
            isFavorite
              ? "assets/icons/control/favorite.svg"
              : "assets/icons/control/favorite_border.svg"
          }
          alt="heart"
        />
      </FavoritingButton>
    </CardContainer>
  );
};

export default ProductCard;
