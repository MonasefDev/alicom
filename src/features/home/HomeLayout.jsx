import styled from "styled-components";
import MainSection from "./main/MainSection";

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <MainSection />
    </StyledHomeLayout>
  );
}

const StyledHomeLayout = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default HomeLayout;
