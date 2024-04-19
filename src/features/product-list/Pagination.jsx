import styled from "styled-components";
import Dropdown from "../../ui/DropDown";

function Pagination({ currentPage, setCurrentPage, lastPage }) {
  return (
    <StyledPagination>
      <Wrapper>
        <Dropdown>
          <Dropdown.Select opens="page">
            <span>Show {currentPage}</span>
          </Dropdown.Select>
          <Dropdown.List name="page">
            {Array.from({ length: lastPage }, (_, i) => i + 1).map((item) => (
              <Dropdown.Item key={item} onChange={() => setCurrentPage(item)}>
                <Option>
                  <p>{item}</p>
                </Option>
              </Dropdown.Item>
            ))}
          </Dropdown.List>
        </Dropdown>
      </Wrapper>
      <ButtonGroup>
        <Button
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage(currentPage - 1);
          }}
          disabled={Boolean(currentPage === 1)}
        >
          <img src="assets/icons/control/chevron_left.svg" alt="chevron-left" />
        </Button>
        <Button
          disabled={Boolean(currentPage === 1)}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {currentPage === 1
            ? currentPage
            : currentPage === lastPage
            ? currentPage - 2
            : currentPage - 1}
        </Button>
        <Button
          disabled={Boolean(currentPage > 1 && currentPage < lastPage)}
          onClick={() =>
            setCurrentPage(
              currentPage === 1
                ? 2
                : currentPage === lastPage
                ? lastPage - 1
                : currentPage
            )
          }
        >
          {currentPage === 1
            ? currentPage + 1
            : currentPage === lastPage
            ? currentPage - 1
            : currentPage}
        </Button>
        <Button
          disabled={Boolean(currentPage === lastPage)}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {currentPage === 1
            ? currentPage + 2
            : currentPage === lastPage
            ? currentPage
            : currentPage + 1}
        </Button>
        <Button
          onClick={() => {
            if (currentPage === lastPage) return;
            setCurrentPage(currentPage + 1);
          }}
          disabled={Boolean(currentPage === lastPage)}
        >
          <img
            src="assets/icons/control/chevron_right.svg"
            alt="chevron-left"
          />
        </Button>
      </ButtonGroup>
    </StyledPagination>
  );
}

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 4rem;
  gap: 1rem;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  background-color: var(--color-white);
`;

const Option = styled.div``;

const ButtonGroup = styled.div`
  height: 100%;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  background-color: var(--color-white);
  display: flex;
`;

const Button = styled.button`
  height: 100%;
  width: 4rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--color-gray-300);
  &:first-child {
    border-left: none;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-200);
  }
`;

export default Pagination;
