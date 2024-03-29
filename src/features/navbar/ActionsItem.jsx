import styled from "styled-components";
import useIsMobile from "../../hooks/useIsMobile";

function ActionsItem({ icon, text }) {
  const isMobile = useIsMobile();
  return (
    <IconConainer>
      <img src={icon} alt="text" />
      {!isMobile && <p>{text}</p>}
    </IconConainer>
  );
}

const IconConainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    filter: invert(0.5) sepia(1) saturate(3) hue-rotate(175deg);
  }
  img {
    height: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default ActionsItem;
