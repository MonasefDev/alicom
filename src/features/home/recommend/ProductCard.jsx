import styled from "styled-components";

function ProductCard({ product }) {
  return (
    <StyledProduct>
      <img src={product.imageUrl} alt="product" />
      <span>${product.price}</span>
      <p>{product.name}</p>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-gray-300);
  cursor: pointer;
  img {
    max-height: 17rem;
    width: auto;
    display: block;
    object-fit: contain;
    margin-bottom: 1rem;
    transition: all 0.5s ease-in-out;
  }
  span {
    color: var(--color-gray-dark);
    font-weight: 500;
  }
  p {
    color: var(--color-gray-500);
    line-height: 2rem;
    height: 4rem;
    overflow: hidden;
  }
  &:hover {
    img {
      transform: rotate3d(0, 1, 0, 180deg);
    }
  }
`;

export default ProductCard;
