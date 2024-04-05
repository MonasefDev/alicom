import styled from "styled-components";
import FormInquery from "./FormInquery";
import Button from "../../../ui/Button";
import useIsMobile from "../../../hooks/useIsMobile";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useState } from "react";

function SectionInquery() {
  const [showForm, setShowForm] = useState(false);
  const isMobile = useIsMobile();
  const ref = useOutsideClick(() => setShowForm(false));
  return (
    <StyledSectionInquery $bgBanner="assets/images/categories/inquery-banner.png">
      <Info>
        <h2>
          An easy way to send <br /> requests to all suppliers
        </h2>
        {!isMobile ? (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        ) : (
          <Button
            onClick={() => setShowForm(true)}
            size="medium"
            variation="primary"
          >
            Contact Suppliers
          </Button>
        )}
      </Info>
      {isMobile ? (
        showForm && (
          <ModelForm>
            <Container>
              <CloseIcon
                onClick={() => setShowForm(false)}
                src="assets/icons/control/close.svg"
                alt="close"
              />
              <FormInquery ref={ref} />
            </Container>
          </ModelForm>
        )
      ) : (
        <FormInquery />
      )}
    </StyledSectionInquery>
  );
}

const StyledSectionInquery = styled.div`
  position: relative;
  width: 100%;
  min-height: 15rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background-image: url(${(pros) => pros.$bgBanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 8px;
  overflow: hidden;
  &::after {
    z-index: 0;
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(95deg, #2c7cf1, rgba(0, 209, 255, 0.5));
  }
  & > * {
    z-index: 1;
  }
  @media only screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  h2,
  p {
    color: var(--color-white);
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 768px) {
    p {
      display: none;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;

const ModelForm = styled.div`
  position: fixed;
  inset: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  height: 3rem;
  padding: 0.5rem;
  /* filter: invert(0.6) sepia(1) saturate(4) hue-rotate(150deg); */
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  border: 1px solid var(--color-gray-500);
  background-color: var(--color-white);
`;

export default SectionInquery;
