import React from "react";
import { observer } from "mobx-react";
import useStore from "util/lib/hooks/useStore";
import WriteAdmission from "../../components/WriteAdmission";

const WriteAdmissionContainer = ({}) => {
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
      <WriteAdmission
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      ></WriteAdmission>
    </>
  );
};

export default observer(WriteAdmissionContainer);
