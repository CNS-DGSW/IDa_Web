import React from "react";
import { inject, observer } from "mobx-react";

const MainContainer = () => {
  return (
    <>
      <div />
    </>
  );
};

export default inject("store")(observer(MainContainer));
