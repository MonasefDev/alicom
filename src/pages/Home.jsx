import styled from "styled-components";
import ProductCard from "../ui/ProductCard";

function Home() {
  return (
    <StyledHome>
      <h1>Home</h1>
      <ProductCard
        title="Regular Fit Resort Shirt"
        price="57.70"
        imageUrl="/path/to/shirt-image.jpg"
        rating="7.5"
        ordersCount="154"
      />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  /* height: max-content; */
`;

export default Home;
