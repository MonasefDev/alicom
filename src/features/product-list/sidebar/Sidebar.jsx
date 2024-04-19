import styled from "styled-components";
import { data } from "../../../data/data";
import { useEffect, useState } from "react";
import List from "./List";
import ListSelect from "./ListSelect";
import RangePrice from "./RangePrice";
import ConditionFilter from "./ConditionFilter";
import RatingsFilter from "./RatingsFilter";

function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState(
    data.categories[0].category
  );
  const [brands, setBrands] = useState(data.categories[0].brands);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [features, setFeatures] = useState(data.categories[0].features);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  // const [conditions, setConditions] = useState(data.categories[0].conditions);

  useEffect(() => {
    setBrands(
      data.categories.find((item) => item.category === selectedCategory).brands
    );
    setSelectedBrands([]);
    setFeatures(
      data.categories.find((item) => item.category === selectedCategory)
        .features
    );
    setSelectedFeatures([]);
  }, [selectedCategory]);

  return (
    <StyledSidebar>
      <List
        list={data.categories.map((item) => item.category)}
        title="Categories"
        onSelect={setSelectedCategory}
      />
      <ListSelect
        list={brands}
        title={"Brands"}
        setSelectedItems={setSelectedBrands}
        selectedItems={selectedBrands}
      />
      <ListSelect
        list={features}
        title={"Features"}
        setSelectedItems={setSelectedFeatures}
        selectedItems={selectedFeatures}
      />
      <RangePrice />
      <ConditionFilter options={data.conditions} title={"Condition"} />
      <RatingsFilter />
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div`
  width: 100%;
  border-top: 1px solid var(--color-gray-300);
`;

export default Sidebar;
