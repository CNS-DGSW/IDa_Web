import React, { useState } from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../components/WriteGrades";
import useStore from "lib/hooks/useStore";
import ScoreGrade from "../../util/types/ScoreGrade";
import FreeSum from "util/types/FreeSum";

const WriteGradeContainer = ({}) => {
  const { store } = useStore();
  const { editGrade } = store.WriteStore;

  const [scoreGrade, setScoreGrade] = useState<ScoreGrade[]>([]);
  const [freeSum, setFreeSum] = useState<FreeSum[]>([]);

  return (
    <>
      <WriteGrade></WriteGrade>
    </>
  );
};

export default observer(WriteGradeContainer);
