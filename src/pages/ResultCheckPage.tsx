import React from "react";
import RegisterContainer from "containers/Register/RegisterContainer";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import ResultCheckContainer from "containers/ResultCheck/ResultCheckContainer";

const ResultCheckPage = () => {
  return (
    <DefaultTemplate>
      <ResultCheckContainer />
    </DefaultTemplate>
  );
};

export default ResultCheckPage;
