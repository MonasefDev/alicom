import styled from "styled-components";
import MainSection from "./main/MainSection";
import SaleSection from "./sale/SaleSection";
import SectionContainer from "./SectionContainer";
import {
  countries,
  productsElectronics,
  productsOutdoor,
  recommendedItems,
  servicesData,
} from "../../data/product-data";
import SectionInquery from "./inquiry/SectionInquery";
import SectionRecommend from "./recommend/SectionRecommend";
import SectionServices from "./services/SectionServices";
import SectionSuppliers from "./suppliers/SectionSuppliers";
import SectionSubscribe from "./subscribe/SectionSubscribe";

function HomeLayout() {
  return (
    <>
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
        <SectionServices services={servicesData} />
        <SectionSuppliers countries={countries} />
      </StyledHomeLayout>
      <SectionSubscribe />
    </>
  );
}

const StyledHomeLayout = styled.div`
  width: 100%;
  padding: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

export default HomeLayout;
