import React, { useEffect, useRef, useState } from 'react';
import { CustomFieldContainer, CustomInput, Error, Placeholder } from './Input.styles'; 

const Input = ({type, placeholder = 'enter', value = "", error, required, onChange = () => {}}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);
    const inputRef = useRef(null);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => {
        if (!inputValue) {
            setIsFocused(false);
        }
    };

    useEffect(() => {
        setInputValue(value ? value :"")
    },[value])


    const clickHandler = () => {
        setIsFocused(true);
        inputRef.current?.focus();
    };

    const changeHandler = e => {
        setInputValue(e.target.value);
        onChange(e);
    }

    return (
        <CustomFieldContainer onClick={clickHandler}>
            <CustomInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                ref={inputRef}
                value={inputValue}
                type={type}
                onChange={changeHandler}
                placeholder=""
                min={0}
                required
            />
            <Placeholder
                className={isFocused || value ? 'top-0 text-xs text-gray-500' : 'text-gray-400'}
            >
               {placeholder}
            </Placeholder>
            {error && <Error>{error}</Error>}
        </CustomFieldContainer>
    );
};

export default Input;
