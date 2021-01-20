import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import Write from "components/Write/Write";
import useStore from "util/lib/hooks/useStore";

const WriteContainer = ({}) => {
  const { store } = useStore();
  const { page } = store.WriteStore;

  return (
    <>
      <Write page={page} />
    </>
  );
};

export default observer(WriteContainer);
