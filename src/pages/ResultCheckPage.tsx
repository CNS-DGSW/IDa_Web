import React from "react";
import RegisterContainer from "containers/Register/RegisterContainer";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import ResultCheckContainer from "containers/ResultCheck/ResultCheckContainer";

const ResultCheckPage = () => {
  return (
    <DefaultTemplate theme={true} style={{ position: "fixed" }}>
      <ResultCheckContainer />
    </DefaultTemplate>
  );
};

export default ResultCheckPage;
