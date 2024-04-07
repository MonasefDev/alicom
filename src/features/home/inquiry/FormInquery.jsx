import { useState } from "react";
import styled, { css } from "styled-components";
import Dropdown from "../../../ui/DropDown";
import Button from "../../../ui/Button";

function FormInquery() {
  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");
  const quantitiesUnit = ["Pcs", "Kg", "Labs"];
  const [selectedItem, setSelectedItem] = useState(quantitiesUnit[0]);
  const [quantity, setQuantity] = useState("");
  return (
    <StyledForm>
      <h4>Send quote to suppliers</h4>
      <Input
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="What item you need?"
      />
      <TextArea
        placeholder="Type more details"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Quantity>
        <Input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <SelectContainer>
          <Dropdown>
            <Dropdown.Select opens="quantity">{selectedItem}</Dropdown.Select>
            <Dropdown.List name="quantity">
              {quantitiesUnit.map((item) => (
                <Dropdown.Item
                  key={item}
                  onChange={() => setSelectedItem(item)}
                >
                  <p>{item}</p>
                </Dropdown.Item>
              ))}
            </Dropdown.List>
          </Dropdown>
        </SelectContainer>
        <div />
      </Quantity>
      <Button
        variation="primary"
        size="medium"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Send Inquery
      </Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 8px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const input = css`
  padding: 1rem;
  line-height: 1;
  border-radius: 8px;
  border: 1px solid var(--color-gray-300);
  outline: 0;
  transition: all 0.2s ease-in-out;
  &:focus {
    border: 1px solid var(--color-blue-dark);
    outline: 1px solid var(--color-blue-dark);
  }
`;

const Input = styled.input`
  ${input}
`;

const TextArea = styled.textarea`
  ${input}
`;

const Quantity = styled.div`
  display: grid;
  grid-template-columns: 50% 25% 1fr;
  gap: 1rem;
  input::placeholder {
    color: var(--color-gray-dark) !important;
  }
`;

const SelectContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--color-gray-300);
`;

export default FormInquery;
