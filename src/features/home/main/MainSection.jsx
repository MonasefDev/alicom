import { useState } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";
import { categoriesMain } from "../../../data/product-data";

function MainSection() {
  const [category, setCategory] = useState(categoriesMain[0]);
  return (
    <StyledMainSection>
      <Sidebar>
        {categoriesMain.map((item) => (
          <div
            className={item.name === category.name ? "active" : ""}
            key={item.name}
            onClick={() => setCategory(item)}
          >
            {item.name}
          </div>
        ))}
      </Sidebar>
      <Banner $bgImage={category.bannerImage}>
        <TextBox>
          <span>Latest trending</span>
          <h3>{category.name} Items</h3>
          <p>View all</p>
        </TextBox>
      </Banner>
      <UserInteraction>
        <UserCard />
        <PromoGet>Get US $10 off with a new supplier</PromoGet>
        <PromoSend>Send quotes with supplier preferences</PromoSend>
      </UserInteraction>
    </StyledMainSection>
  );
}

const StyledMainSection = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: 20% 1fr 20rem;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 2rem 1.5rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: minmax(20%, 20rem) 1fr;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    height: calc(100vw / 1.7);
    padding: 0;
    border-radius: 0;
  }
`;

const Sidebar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  & > div {
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: var(--color-blue-light);
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--color-gray-dark);
    }
  }
  .active {
    background-color: var(--color-blue-light);
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-gray-dark);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Banner = styled.div`
  height: 100%;
  width: 100%;
  padding: 5rem;
  background-color: var(--color-gray-100);
  background-image: url(${(pros) => pros.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(227, 240, 255, 0.2);
    pointer-events: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem;
    h3 {
      font-size: 2rem;
    }
  }
`;

const TextBox = styled.div`
  background-color: #eff2f4c6;
  width: max-content;
  padding: 1rem;
  border-radius: 8px;
  color: var(--color-orange-darker);
  h3 {
    color: var(--color-orange-darker);
    padding: 0.5rem 0;
  }
  p {
    color: var(--color-white);
    padding: 0.3rem 2rem;
    background-color: var(--color-green-blue);
    width: max-content;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid var(--color-gray-500);
  }
`;

const UserInteraction = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: max-content 1fr 1fr;
  gap: 1rem;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const PromoGet = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  background-color: var(--color-orange-darker);
`;

const PromoSend = styled(PromoGet)`
  background-color: var(--color-green-blue);
`;

export default MainSection;
