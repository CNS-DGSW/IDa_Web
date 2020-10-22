import React from "react";
import DefaultTemplate from "components/common/Template/DefaultTemplate";
import NoticeContainer from "containers/Notice/NoticeContainer";

const NoticePage = () => {
  return (
    <div>
      <DefaultTemplate>
        <NoticeContainer />
      </DefaultTemplate>
    </div>
  );
};

export default NoticePage;
