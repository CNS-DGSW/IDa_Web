import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import WriteContainer from "containers/Write/WriteContainer";

const RegisterPage = () => {
  return (
    <DefaultTemplate theme={true}>
      <WriteContainer />
    </DefaultTemplate>
  );
};

export default RegisterPage;
