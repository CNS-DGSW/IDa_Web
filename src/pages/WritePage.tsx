import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import WriteContainer from "containers/Write/WriteContainer";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const RegisterPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate theme={true}>
          <WriteContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default RegisterPage;
