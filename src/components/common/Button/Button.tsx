import React from "react";
import "./Button.scss";

interface ButtonProps {
  style?: React.CSSProperties;
  fontSize?: number;
  content: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const Button = ({ style, fontSize, content, onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} style={style} className="Button">
      <span className="Button-content">{content}</span>
    </div>
  );
};

export default Button;
