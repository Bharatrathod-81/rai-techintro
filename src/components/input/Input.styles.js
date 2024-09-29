import tw from "tailwind-styled-components";

export const CustomFieldContainer = tw.div`
    relative
    text-sm
    border-t-5 
    w-full
    border-gray-300 
`
export const CustomInput = tw.input`
    border-none
    appearance-none
    bg-gray-200
    p-2.5
    rounded
    w-full
    outline-none
    text-sm
    border
    border-gray-300
    focus:border-green-500
`

export const Error = tw.small`
    text-red-500
    font-bold
`
export const Placeholder = tw.span`
    absolute
    left-3
    whitespace-nowrap
    overflow-hidden
    text-ellipsis
    border-gray-300 
    top-5
    text-gray-700
    transform 
    -translate-y-1/2
    transition-all
    duration-300
    ease-in-out
    bg-gray-200
    p-0.5
    px-2
    rounded
    w-fit
`
