import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../features/navbar/Navbar";

const StyledAppLayout = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <footer>Footer</footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
