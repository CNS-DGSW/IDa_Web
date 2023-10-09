import React from "react";
import RegisterContainer from "containers/Register/RegisterContainer";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const RegisterPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <RegisterContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default RegisterPage;
