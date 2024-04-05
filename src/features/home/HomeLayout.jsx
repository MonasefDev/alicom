import styled from "styled-components";
import MainSection from "./main/MainSection";
import SaleSection from "./sale/SaleSection";
import SectionContainer from "./SectionContainer";
import {
  productsElectronics,
  productsOutdoor,
  recommendedItems,
} from "../../data/product-data";
import SectionInquery from "./inquiry/SectionInquery";
import SectionRecommend from "./recommend/SectionRecommend";

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <MainSection />
      <SaleSection />
      <SectionContainer
        title="Home and Outdoor"
        products={productsOutdoor}
        bgBanner="assets/images/categories/outdoor-banner.jpg"
      />
      <SectionContainer
        title="Consumer electronics and gadgets"
        products={productsElectronics}
        bgBanner="assets/images/categories/electronics-banner.png"
      />
      <SectionInquery />
      <SectionRecommend products={recommendedItems} />
    </StyledHomeLayout>
  );
}

const StyledHomeLayout = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

export default HomeLayout;
