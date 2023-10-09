import DefaultTemplate from "components/common/Template/DefaultTemplate";
import QnaContainer from "containers/Qna/QnaContainer";
import React from "react";
import { useLocation } from "react-router-dom";
import { ILocationState } from "util/types/ILocationState";
import NotFound from "components/NotFound";

const QnaPage = () => {
  const location = useLocation();
  const { state } = location as unknown as ILocationState;
  return (
    <>
      {state?.isValid ? (
        <DefaultTemplate>
          <QnaContainer />
        </DefaultTemplate>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default QnaPage;
