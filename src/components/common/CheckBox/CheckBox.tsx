import React from "react";
import "./CheckBox.scss";

interface CheckBoxProps {
  content: string;
  id: string;
  value: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = ({ content, id, value, setValue }: CheckBoxProps) => {
  return (
    <div className="CheckBox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue && setValue(e.target.checked)}>
      <input id={id} type="checkbox" className="CheckBox-checkBox" checked={value} />
      <label htmlFor={id} />
      <span>{content}</span>
    </div>
  );
};

export default CheckBox;
