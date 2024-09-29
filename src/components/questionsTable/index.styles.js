import tw from "tailwind-styled-components";

export const Table = tw.table`
  w-full 
  mt-4
`;

export const TableHeader = tw.th`
  border 
  px-2 
  py-1
`;

export const TableCell = tw.td`
  border 
  px-2 
  py-1
  text-center
`;

export const DeleteButton = tw.button`
  text-red-500 
  hover:text-red-600
`;

export const EditButton = tw.button`
  text-blue-500 
  hover:text-blue-600
`;