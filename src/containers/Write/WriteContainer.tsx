import React from "react";
import { inject, observer } from "mobx-react";
import Write from "components/Write/Write";

const WriteContainer = ({}) => {
  return (
    <>
      <Write />
    </>
  );
};

export default inject("store")(observer(WriteContainer));
