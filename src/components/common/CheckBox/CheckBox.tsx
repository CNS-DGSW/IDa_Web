import React from "react";
import "./CheckBox.scss";

interface CheckBoxProps {
  content: string;
  id: string;
  style?: React.CSSProperties;
  value: boolean;
  setValue?: React.Dispatch<React.SetStateAction<boolean>>;
  handleAllCheck?: () => void;
}

const CheckBox = ({
  content,
  id,
  style,
  value,
  setValue,
  handleAllCheck,
}: CheckBoxProps) => {
  return (
    <div
      className="CheckBox"
      style={style}
      onClick={() => {
        setValue && setValue(!value);
        handleAllCheck && handleAllCheck();
      }}
    >
      <input
        id={id}
        type="checkbox"
        className="CheckBox-checkBox"
        checked={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue && setValue(e.target.checked)
        }
      />
      <label htmlFor={id} />
      <span>{content}</span>
    </div>
  );
};

export default CheckBox;
