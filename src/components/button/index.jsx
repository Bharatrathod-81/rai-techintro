import React from 'react';
import tw from "tailwind-styled-components";

const StyledButton = tw.button`
  bg-blue-500 
  text-white 
  px-4 
  py-2 
  rounded 
  mt-4 
  hover:bg-blue-600
`;

const Button = ({ onClick, children, type = "button", className }) => (
  <StyledButton type={type} onClick={onClick} className={className}>
    {children}
  </StyledButton>
);

export default Button;
