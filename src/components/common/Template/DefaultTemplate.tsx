import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import Footer from "../Footer";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <div className="default-template">
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
