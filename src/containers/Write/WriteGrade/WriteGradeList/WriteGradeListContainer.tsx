import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteGradeList from "components/Write/WriteGradeList";
import useStore from "lib/hooks/useStore";
import Grade from "util/enums/Grade";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Score from "util/enums/Score";
import updateSemGrade from "lib/updateSemGrade";
import { handleGetWriteError } from "lib/handleErrors";

// 성적 리스트
const WriteGradeListContainer = ({}) => {
  const { store } = useStore();

  const history = useHistory();

  const {
    gradeType,
    getGradeList,
    grades,
    handleGrades,
    freeSem,
    handleFreeSem,
    handleIsChanged,
  } = store.WriteStore;

  // 성적 리스트 조회
  const getGradeListCallback = useCallback(async () => {
    await getGradeList()
      .then((res) => {
        handleGrades(res.data.grade);
        handleFreeSem(res.data.freeSem);
        if (gradeType === Grade.UNGRADUATED) {
          handleFreeSem({ ...res.data.freeSem, freeSem32: true });
        }
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, [getGradeList, gradeType]);

  // 성적 리스트에 새로운 과목 추가
  const addNewGrade = () => {
    let grade = grades.find((grade) => {
      return grade.subjectName === "";
    });

    // 성적 과목 이름은 중복을 지원하지 않기 때문.
    if (grade) {
      toast.warning("이전에 추가된 성적을 먼저 작성해주세요.");
      return;
    }

    grade = {
      score11: Score.NONE,
      score12: Score.NONE,
      score21: Score.NONE,
      score22: Score.NONE,
      score31: Score.NONE,
      score32: Score.NONE,
      subjectName: "",
    };

    handleGrades([...grades, grade]);
  };

  // 해당 과목 성적 수정
  const handleGradesCallback = useCallback(
    (idx: number, value: Score, subjectName: string) => {
      const gradeIdx = grades.findIndex((grade) => {
        return grade.subjectName === subjectName;
      });

      let grade = grades.find((grade) => {
        return grade.subjectName === subjectName;
      });
      if (grade === undefined)
        grade = {
          score11: Score.NONE,
          score12: Score.NONE,
          score21: Score.NONE,
          score22: Score.NONE,
          score31: Score.NONE,
          score32: Score.NONE,
          subjectName,
        };
      if (gradeIdx !== -1) {
        handleGrades([
          ...grades.slice(0, gradeIdx),
          updateSemGrade(idx, value, grade),
          ...grades.slice(gradeIdx + 1, grades.length),
        ]);
      } else {
        handleGrades([...grades, updateSemGrade(idx, value, grade)]);
      }
      handleIsChanged(true);
    },
    [grades]
  );

  useEffect(() => {
    getGradeListCallback();
  }, [getGradeListCallback]);

  return (
    <>
      <WriteGradeList
        grades={grades}
        gradeType={gradeType}
        freeSem={freeSem}
        handleGradesCallback={handleGradesCallback}
        handleFreeSem={handleFreeSem}
        addNewGrade={addNewGrade}
      />
    </>
  );
};

export default observer(WriteGradeListContainer);
