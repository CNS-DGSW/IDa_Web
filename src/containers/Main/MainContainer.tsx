import Main from "components/Main";
import { inject, observer } from "mobx-react";
import React from "react";

const MainContainer = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default inject("store")(observer(MainContainer));
