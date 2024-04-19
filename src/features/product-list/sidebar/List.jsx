import { useEffect, useState } from "react";
import styled from "styled-components";

function List({ list, title, onSelect }) {
  const [showList, setShowList] = useState(true);
  const [listToShow, setListToShow] = useState(list.slice(0, 4));

  useEffect(() => {
    setListToShow(listToShow.length < list.length ? list.slice(0, 4) : list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const onShow = () => {
    listToShow.length < list.length
      ? setListToShow(list)
      : setListToShow(list.slice(0, 4));
  };

  return (
    <StyledList>
      <Title $isOpen={showList} onClick={() => setShowList(!showList)}>
        <h5>{title}</h5>
        <img src="assets/icons/control/chevron_right.svg" alt="arrow-right" />
      </Title>
      {showList && (
        <>
          {listToShow.map((item, index) => (
            <ListItem onClick={() => onSelect(item)} key={title + index}>
              {item}
            </ListItem>
          ))}
          <button onClick={onShow}>
            {listToShow.length < list.length ? "Show more" : "Show less"}
          </button>
        </>
      )}
    </StyledList>
  );
}

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-gray-300);

  button {
    background-color: transparent;
    border: none;
    width: max-content;
    color: var(--color-blue-dark);
    padding: 0.4rem 1rem;
    opacity: 0.8;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.1s ease-in-out;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "-90deg" : "90deg")});
  }
`;

const ListItem = styled.div`
  padding: 0.4rem 1rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export default List;
