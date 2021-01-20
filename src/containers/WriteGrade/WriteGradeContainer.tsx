import React from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../components/WriteGrades";
import useStore from "util/lib/hooks/useStore";

const WriteGradeContainer = ({}) => {
  const { store } = useStore();

  return (
    <>
      <WriteGrade></WriteGrade>
    </>
  );
};

export default observer(WriteGradeContainer);
