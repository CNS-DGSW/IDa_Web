import React from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteParents from "../../components/WriteParents";

const WriteParentContainer = ({}) => {
  const { store } = useStore();

  return (
    <>
      <WriteParents></WriteParents>
    </>
  );
};

export default observer(WriteParentContainer);
