import styled from "styled-components";

function RatingBox({ rating }) {
  const ArrayRatings = Array.from({ length: 5 }, (v, i) => i);

  return (
    <StyledRatingBox>
      {ArrayRatings.map((_, i) => (
        <img
          key={"star" + i}
          src={`assets/icons/star_${i <= rating ? "orange" : "gray"}.svg`}
          alt="star"
        />
      ))}
    </StyledRatingBox>
  );
}

const StyledRatingBox = styled.div`
  display: flex;

  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default RatingBox;
