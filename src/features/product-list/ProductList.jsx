import styled from "styled-components";
import { data } from "../../data/data";
import ProductCardList from "./ProductCardList";
import Pagination from "./Pagination";
import { useState } from "react";

function ProductList() {
  const [currentPage, setCurrentPage] = useState(2);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const min = (currentPage - 1) * productsPerPage;
  const max = min + productsPerPage;
  return (
    <StyledProductList>
      <List>
        {data.products.slice(min, max).map((product) => (
          <ProductCardList key={product.id} product={product} />
        ))}
      </List>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={Math.floor(data.products.length / productsPerPage) + 1}
      />
    </StyledProductList>
  );
}

const StyledProductList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const List = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;

export default ProductList;
