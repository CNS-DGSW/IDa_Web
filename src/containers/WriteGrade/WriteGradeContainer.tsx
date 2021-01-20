import React from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../components/WriteGrades";
import useStore from "util/lib/hooks/useStore";

const WriteGradeContainer = ({}) => {
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
      <WriteGrade page={page} nextPage={nextPage} prevPage={prevPage}></WriteGrade>
    </>
  );
};

export default observer(WriteGradeContainer);
