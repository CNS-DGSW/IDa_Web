import React from "react";
import HeaderContainer from "containers/Header/HeaderContainer";
import Footer from "../Footer";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <>
      <HeaderContainer />
      {children}
      <Footer />
    </>
  );
};

export default DefaultTemplate;
