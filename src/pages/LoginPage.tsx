import React from "react";
import LoginContainer from "containers/Login/LoginContainer";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const LoginPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <LoginContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default LoginPage;
