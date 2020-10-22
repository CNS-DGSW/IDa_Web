import React from "react";
import { inject, observer } from "mobx-react";
import Header from "components/common/Header";

const HeaderContainer = ({}) => {
  return (
    <>
      <Header />
    </>
  );
};

export default inject("store")(observer(HeaderContainer));
