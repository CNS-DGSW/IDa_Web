import React from "react";
import WritePrintContainer from "containers/Write/WritePrint/WritePrintContainer";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const RegisterPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return <>{state?.isValid ? <WritePrintContainer /> : <NotFound />}</>;
};

export default RegisterPage;
