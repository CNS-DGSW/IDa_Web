import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import NoticeContainer from "containers/Notice/NoticeContainer";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const NoticePage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <NoticeContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default NoticePage;
