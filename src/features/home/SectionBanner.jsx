import styled from "styled-components";
import Button from "../../ui/Button";

function Banner({ title, bgBanner }) {
  return (
    <StyledBanner $bgBanner={bgBanner}>
      <h4>{title}</h4>
      <Button size="medium" variation="text">
        Source now
      </Button>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 8px 0 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border: 1px solid var(--color-gray-300);
  border-right: none;
  background-image: url(${(pros) => pros.$bgBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right;
  h4 {
    max-width: 15rem;
  }
  & > * {
    z-index: 2;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    background: rgba(255, 232, 186, 0.4);
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
// const Title = styled.div`
//   width: 100%;
//   height: auto;
//   display: block;
//   overflow: hidden;
//   h4 {
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     line-height: 2rem;
//     max-height: 4rem;
//   }
// `;

export default Banner;
