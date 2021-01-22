import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import Footer from "../Footer";

interface DefaultTemplateProps {
  children: React.ReactNode;
  theme?: boolean;
}

const DefaultTemplate = ({ children, theme }: DefaultTemplateProps) => {
  return (
    <div className="default-template">
      <HeaderContainer theme={theme} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
