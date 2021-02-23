import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import WritePrintContainer from "containers/Write/WritePrint/WritePrintContainer";

const RegisterPage = () => {
  return (
    <DefaultTemplate theme={true}>
      <WritePrintContainer />
    </DefaultTemplate>
  );
};

export default RegisterPage;
