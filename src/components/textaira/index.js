import React from 'react';
import tw from "tailwind-styled-components";

const StyledTextarea = tw.textarea`
  w-full 
  p-2 
  border 
  border-gray-300 
  rounded
`;

const Textarea = ({ value, onChange, rows = 4, placeholder }) => (
  <StyledTextarea className='outline-none'
    value={value}
    onChange={onChange}
    rows={rows}
    placeholder={placeholder}
  />
);

export default Textarea;
