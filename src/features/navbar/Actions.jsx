import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";
import ActionsItem from "./ActionsItem";

function Actions() {
  const isMobile = useIsMobile();
  return (
    <StyledActions>
      <ActionsItem icon="/assets/icons/control/person.svg" text="Profile" />
      {!isMobile && (
        <>
          <ActionsItem
            icon="/assets/icons/control/message.svg"
            text="Message"
          />
          <ActionsItem icon="/assets/icons/control/heart.svg" text="Orders" />
        </>
      )}
      <ActionsItem
        icon="/assets/icons/control/shopping-cart.svg"
        text="My Cart"
      />
    </StyledActions>
  );
}

const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export default Actions;
