import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import Footer from "../Footer";

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
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
