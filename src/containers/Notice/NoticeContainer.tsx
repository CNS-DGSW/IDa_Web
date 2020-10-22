import React from "react";
import { inject, observer } from "mobx-react";

const NoticeContainer = ({}) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default inject("store")(observer(NoticeContainer));
