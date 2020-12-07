import React from "react";
import "./CustomInput.scss";

interface CustomInputProps {
  placeholder?: string;
  type?: string | undefined;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
}

const CustomInput = ({ placeholder, type, value, setValue, style }: CustomInputProps) => {
  return (
    <>
      <input
        style={style}
        type={type}
        className="CustomInput"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue && setValue(e.target.value)}
      />
    </>
  );
};

export default CustomInput;
