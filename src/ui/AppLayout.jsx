import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../features/navbar/Navbar";
import { useState } from "react";

const StyledAppLayout = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: ${(pros) => (pros.$isOpen ? "hidden" : "auto")};
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
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
      <footer>Footer</footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
