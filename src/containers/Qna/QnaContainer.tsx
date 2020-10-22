import React from "react";
import { inject, observer } from "mobx-react";

const QnaContainer = ({}) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default inject("store")(observer(QnaContainer));
