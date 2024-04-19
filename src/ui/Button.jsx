import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.3rem;
    padding: 0.4rem 0.8rem;
    font-weight: 500;
    text-align: center;
  `,
  medium: css`
    font-size: 1.6rem;
    padding: 1rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  text: css`
    color: var(--color-gray-dark);
    background-color: var(--color-white);
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--color-blue-light);
    }
  `,
  icon: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: transparent;
    border: none;
    color: var(--color-blue-dark);
    img {
      width: 2rem;
    }
  `,
  primary: css`
    color: var(--color-white);
    background-color: var(--color-blue-dark);
    border: 1px solid var(--color-blue-dark);
    line-height: 1;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: var(--color-white);
      color: var(--color-blue-dark);
    }
  `,
  // secondary: css`
  //   width: 100%;
  //   color: var(--color-blue-dark);
  //   padding: 0.8rem 2rem;
  //   border-radius: 6px;
  //   border: 1px solid var(--color-gray-300);
  //   box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  //   cursor: pointer;
  //   transition: all 0.2s ease-in-out;
  //   &:hover {
  //     color: var(--color-white);
  //     background-color: var(--color-blue-dark);
  //   }
  // `,
};

const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: max-content;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
