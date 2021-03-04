import DefaultTemplate from "components/common/Template/DefaultTemplate";
import React from "react";
import MainContainer from "../containers/Main/MainContainer";
import Footer from "components/common/Footer";

const MainPage = () => {
  return (
    <DefaultTemplate>
      <MainContainer />
      <Footer />
    </DefaultTemplate>
  );
};

export default MainPage;
