import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";

interface DefaultTemplateProps {
  children: React.ReactNode;
  theme?: boolean;
  style?: React.CSSProperties;
}

const DefaultTemplate = ({ children, theme, style }: DefaultTemplateProps) => {
  return (
    <div className="default-template">
      <HeaderContainer theme={theme} style={style} />
      {children}
    </div>
  );
};

export default DefaultTemplate;
