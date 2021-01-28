import React from "react";
import "./Button.scss";

interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
}

const Button = ({ children, style , className, onClick }: ButtonProps) => {
  return (
    <div
      className={className}
      style={style}
      onClick={(e) => onClick && onClick(e)}
      id="Button"
    >
      <span id="Button-content">{children}</span>
    </div>
  );
};

export default Button;
