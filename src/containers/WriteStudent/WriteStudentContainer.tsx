import React from "react";
import { observer } from "mobx-react";
import WriteStudent from "../../components/WriteStudent";
import useStore from "util/lib/hooks/useStore";

const WriteStudentContainer = ({}) => {
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
      <WriteStudent page={page} nextPage={nextPage} prevPage={prevPage}></WriteStudent>
    </>
  );
};

export default observer(WriteStudentContainer);
