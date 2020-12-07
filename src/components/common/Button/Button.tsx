import React from "react";
import "./Button.scss";

interface ButtonProps {
  style?: React.CSSProperties;
  content: string;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const Button = ({ style, content, className, onClick }: ButtonProps) => {
  return (
    <div
      className={className}
      style={style}
      onClick={(e) => onClick && onClick(e)}
      id="Button"
    >
      <span id="Button-content">{content}</span>
    </div>
  );
};

export default Button;
