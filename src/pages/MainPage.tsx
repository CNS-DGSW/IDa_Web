import DefaultTemplate from "components/common/Template/DefaultTemplate";
import React from "react";
import MainContainer from "../containers/Main/MainContainer";
import Footer from "components/common/Footer";
import useIsApplyPeriod from "lib/hooks/useIsApplyPeriod";
import BlurTemplate from "components/common/Template/BlurTemplate";
import MainAlert from "components/MainAlert/MainAlert";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

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
  const location = useLocation();
  const { state } = location as unknown as ILocationState;

  return (
    <>
      {state?.isValid ? (
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
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MainPage;
