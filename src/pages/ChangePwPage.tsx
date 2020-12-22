import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import ChangePwContainer from "containers/ChangePw/ChangePwContainer";

const MainPage = () => {
  return (
    <DefaultTemplate>
      <ChangePwContainer />
    </DefaultTemplate>
  );
};

export default MainPage;
