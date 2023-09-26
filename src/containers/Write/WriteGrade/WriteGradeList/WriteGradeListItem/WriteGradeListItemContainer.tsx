import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteGradeListItem from "components/Write/WriteGradeList/WriteGradeListItem";
import Score from "util/enums/Score";
import ScoreGrade from "util/types/ScoreGrade";
import gradeListModel from "models/GradeListModel";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  freeSemAtom,
  gradeTypeAtom,
  gradesAtom,
  isChangedAtom,
} from "stores/Write/WriteAtom";

interface WriteGradeListItemContainer {
  model: string;
  isNew?: boolean;
  handleGradesCallback: (
    idx: number,
    value: Score,
    subjectName: string
  ) => void;
  filtered?: ScoreGrade;
}

const WriteGradeListItemContainer = ({
  isNew,
  handleGradesCallback,
  model,
  filtered,
}: WriteGradeListItemContainer) => {
  const gradeType = useRecoilValue(gradeTypeAtom);
  const setIsChanged = useSetRecoilState(isChangedAtom);
  const [grades, setGraeds] = useRecoilState(gradesAtom);
  const freeSem = useRecoilValue(freeSemAtom);

  const [value, setValue] = useState<string>("");

  // 성적 리스트 중 한 과목 삭제
  const deleteGrade = (model: string) => {
    const gradeIdx = grades.findIndex((grade: any) => {
      return grade.subjectName === model;
    });

    if (gradeIdx === -1) return;

    setGraeds([
      ...grades.slice(0, gradeIdx),
      ...grades.slice(gradeIdx + 1, grades.length),
    ]);
  };

  // 성적 과목 이름 변경
  const handleNameChange = (prevName: string, name: string) => {
    let flag = false;
    for (let i in gradeListModel) {
      if (gradeListModel[i] === name) {
        flag = true;
        break;
      }
    }

    const isExist = grades.find((grade: any) => {
      return grade.subjectName === name;
    });

    if (flag || isExist) {
      toast.warning("이미 같은 이름의 요소가 있습니다.");
      setValue(prevName);
      return;
    }

    //2021년 부터 예체능 허용
    // if (name === "체육" || name === "미술" || name === "음악") {
    //   toast.warning("예체능 분야는 입력하지 않습니다.");
    //   setValue(prevName);
    //   return;
    // }

    const gradeIdx = grades.findIndex((grade: any) => {
      return grade.subjectName === prevName;
    });

    let grade = grades.find((grade: any) => {
      return grade.subjectName === prevName;
    });

    if (grade && gradeIdx !== -1) {
      grade.subjectName = name;
      setGraeds([
        ...grades.slice(0, gradeIdx),
        grade,
        ...grades.slice(gradeIdx + 1, grades.length),
      ]);
    }
  };

  useEffect(() => {
    setValue(model);
  }, [model]);

  return (
    <>
      <WriteGradeListItem
        freeSem={freeSem}
        handleGradesCallback={handleGradesCallback}
        value={value}
        setValue={setValue}
        handleNameChange={handleNameChange}
        handleIsChanged={(value: boolean) => setIsChanged(value)}
        gradeType={gradeType}
        filtered={filtered}
        isNew={isNew}
        model={model}
        deleteGrade={deleteGrade}
      />
    </>
  );
};

export default observer(WriteGradeListItemContainer);
