import React from 'react';
import tw from "tailwind-styled-components";
import { Error } from '../input/Input.styles';

const StyledSelectField = tw.select`
  w-full 
  p-2
  border 
  bg-gray-200
  rounded
  outline-none
`;

const SelectField = ({ value, onChange, options, error }) => (

  <div>
    <StyledSelectField value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelectField>
    {error && <Error>err</Error>}
  </div>
);

export default SelectField;
