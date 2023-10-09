import DefaultTemplate from "components/common/Template/DefaultTemplate";
import React from "react";
import MainContainer from "../containers/Main/MainContainer";
import Footer from "components/common/Footer";
import useIsApplyPeriod from "lib/hooks/useIsApplyPeriod";
import BlurTemplate from "components/common/Template/BlurTemplate";
import MainAlert from "components/MainAlert/MainAlert";

const Contents = () => {
  return (
    <>
      <MainContainer />
      <Footer />
    </>
  );
};

const MainPage = () => {
  const isTest = useIsApplyPeriod();

  return (
    <>
      {!isTest ? (
        <>
          <MainAlert />
          <BlurTemplate>
            <Contents />
          </BlurTemplate>
        </>
      ) : (
        <DefaultTemplate>
          <Contents />
        </DefaultTemplate>
      )}
    </>
  );
};

export default MainPage;
