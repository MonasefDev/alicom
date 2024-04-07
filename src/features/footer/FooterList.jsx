import styled from "styled-components";

function FooterList({ list }) {
  return (
    <StyledList>
      <p>{list.title}</p>
      {list.links.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  list-style: none;

  p {
    font-size: 1.8rem;
    color: var(--color-gray-dark);
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--color-gray-500);
    transition: all 0.1s ease-in-out;
    &:hover {
      color: var(--color-blue-dark);
    }
  }
`;

export default FooterList;
