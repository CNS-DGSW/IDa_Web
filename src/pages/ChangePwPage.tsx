import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import ChangePwContainer from "containers/ChangePw/ChangePwContainer";
import { useLocation } from "react-router-dom";
import NotFound from "components/NotFound";
import { ILocationState } from "util/types/ILocationState";

const MainPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <ChangePwContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MainPage;
