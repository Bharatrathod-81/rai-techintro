import React from 'react';
import tw from "tailwind-styled-components";

const StyledLabel = tw.label`
  block 
  mt-4
`;

const Checkbox = ({ checked, onChange, label }) => (
  <StyledLabel>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="mr-2"
    />
    {label}
  </StyledLabel>
);

export default Checkbox;
