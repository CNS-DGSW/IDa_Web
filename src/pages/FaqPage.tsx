import DefaultTemplate from "components/common/Template/DefaultTemplate";
import FaqContainer from "containers/Faq/FaqContainer";
import React from "react";

const FaqPage = () => {
  return (
    <div>
      <DefaultTemplate>
        <FaqContainer />
      </DefaultTemplate>
    </div>
  );
};

export default FaqPage;
