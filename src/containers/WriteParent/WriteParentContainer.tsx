import React from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteParents from "../../components/WriteParents";

const WriteParentContainer = ({}) => {
  const { store } = useStore();
  const { page, pageHandle } = store.WriteStore;

  const nextPage = () => {
    pageHandle(page + 1);
  };

  const prevPage = () => {
    pageHandle(page - 1);
  };
  return (
    <>
      <WriteParents page={page} nextPage={nextPage} prevPage={prevPage}></WriteParents>
    </>
  );
};

export default observer(WriteParentContainer);
