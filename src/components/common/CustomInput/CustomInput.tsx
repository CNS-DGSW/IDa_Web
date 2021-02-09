import React, { useRef } from "react";
import "./CustomInput.scss";

interface CustomInputProps {
  placeholder?: string;
  type?: string | undefined;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
  passwordInput?: React.RefObject<HTMLInputElement>;
  maxLength?: number;
  onClick?: any;
  className?: string;
}

const CustomInput = ({
  placeholder,
  type,
  value,
  setValue,
  style,
  passwordInput,
  maxLength,
  onClick,
  className,
}: CustomInputProps) => {
  return (
    <>
      <input
        style={style}
        type={type}
        className={className ? `${className} CustomInput` : "CustomInput"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue && setValue(e.target.value)}
        ref={passwordInput}
        maxLength={maxLength}
        onClick={onClick}
      />
    </>
  );
};

export default CustomInput;
