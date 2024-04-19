import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../features/navbar/Navbar";
import { useState } from "react";
import Footer from "../features/footer/Footer";

const StyledAppLayout = styled.main`
  height: 100vh;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: max-content 1fr max-content;
  overflow: ${(pros) => (pros.$isOpen ? "hidden" : "auto")};
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
function AppLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <StyledAppLayout $isOpen={isNavOpen}>
      <Navbar isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
