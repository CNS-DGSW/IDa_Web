import DefaultTemplate from "components/common/Template/DefaultTemplate";
import FaqContainer from "containers/Faq/FaqContainer";
import React from "react";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const FaqPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <FaqContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default FaqPage;
