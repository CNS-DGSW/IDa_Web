import React from "react";
import "./CheckBox.scss";

interface CheckBoxProps {
  content: string;
  id: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = ({ content, id, value, setValue }: CheckBoxProps) => {
  return (
    <div className="Login-box-save">
      <input
        id={id}
        type="checkbox"
        className="Login-box-save-checkBox"
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.checked)}
      />
      <label htmlFor={id} />
      <span>{content}</span>
    </div>
  );
};

export default CheckBox;