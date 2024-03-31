import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../../ui/DropDown";

function ShopHeader({ countries, currencies }) {
  const [country, setCountry] = useState(countries[0]);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <StyledShop>
      <Dropdown>
        <Dropdown.Select opens="currency">
          <SelectElement>
            <span>
              Curr({currency.symbol}), {currency.code}
            </span>
          </SelectElement>
        </Dropdown.Select>
        <Dropdown.List name="currency">
          {currencies.map((item) => (
            <Dropdown.Item key={item.code} onChange={() => setCurrency(item)}>
              <Option>
                <p>{`${item.label}(${item.symbol}) - ${item.code}`}</p>
              </Option>
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
      <Dropdown>
        <Dropdown.Select opens="ship">
          <SelectElement>
            <span>Ship to</span>
            <img src={country.flag} alt={country.name} />
          </SelectElement>
        </Dropdown.Select>
        <Dropdown.List name="ship">
          {countries.map((item) => (
            <Dropdown.Item key={item.name} onChange={() => setCountry(item)}>
              <Option>
                <img src={item.flag} alt={item.name} />
                <p>{item.name}</p>
              </Option>
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </Dropdown>
    </StyledShop>
  );
}

const StyledShop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SelectElement = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    font-size: 1.6rem;
    color: var(--color-gray-dark);
  }
  img {
    height: 1.6rem;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    height: 1.6rem;
  }
`;

export default ShopHeader;
