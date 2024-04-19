import React from "react";
import styled from "styled-components";

const FeaturesList = styled.div`
  padding: 1rem;
  border-radius: 8px;
`;

const Feature = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 2.2rem;
  width: 2.2rem;
  background-color: transparent;
  border: 2px solid var(--color-gray-300);
  border-radius: 4px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${Checkmark} {
    background-color: var(--color-blue-dark);
    border: 2px solid var(--color-blue-dark);
    &:after {
      display: block;
    }
  }
`;

const SeeAll = styled.a`
  color: var(--color-blue-dark);
  text-decoration: none;
  display: block;
  margin-top: 1rem;
`;

const FeatureSection = ({ features }) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  return (
    <FeaturesList>
      {features.map((feature) => (
        <Feature key={feature.id}>
          {feature.label}
          <Checkbox checked={(feature) => {}} />
          <Checkmark />
        </Feature>
      ))}
      <SeeAll href="#">See all</SeeAll>
    </FeaturesList>
  );
};

export default FeatureSection;

// Usage example:
// <FeatureSection features={featuresData} />
