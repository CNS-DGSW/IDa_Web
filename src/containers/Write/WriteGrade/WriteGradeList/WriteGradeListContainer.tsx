import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteGradeList from "components/Write/WriteGradeList";
import Grade from "util/enums/Grade";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Score from "util/enums/Score";
import updateSemGrade from "lib/updateSemGrade";
import { handleGetWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  editGrade,
  freeSemAtom,
  getGradeList,
  gradeTypeAtom,
  gradesAtom,
  isChangedAtom,
} from "stores/Write/WriteAtom";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";

interface WriteGradeListContainer {
  grades:ScoreGrade[];
  setGrades:React.Dispatch<React.SetStateAction<ScoreGrade[]>>;
  freeSem:FreeSemType;
  setFreeSem:React.Dispatch<React.SetStateAction<FreeSemType>>;
}

// 성적 리스트
const WriteGradeListContainer = ({
  grades,
  setGrades,
  freeSem,
  setFreeSem
}:WriteGradeListContainer) => {
  const history = useNavigate();

  const gradeType = useRecoilValue(gradeTypeAtom);
  const getGradeListAtom = useRecoilValue(getGradeList);
  //const [grades, setGrades] = useRecoilState(gradesAtom);
  //const [freeSem, setFreeSem] = useRecoilState(freeSemAtom);
  const setIsChanged = useSetRecoilState(isChangedAtom);
  const gr = useRecoilValue(gradesAtom)
  const editGradeAtom = useRecoilValue(editGrade);

  // 성적 리스트 조회
  const getGradeListCallback = useCallback(async () => {
    await getGradeListAtom()
      .then((res: any) => {
        setGrades(res.data.grade);
        setFreeSem(res.data.freeSem);
        if (gradeType === Grade.UNGRADUATED) {
          setFreeSem({ ...res.data.freeSem, freeSem32: true });
        }
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, [getGradeList, gradeType]);

  // 성적 리스트에 새로운 과목 추가
  const addNewGrade = () => {
    let grade = grades.find((grade: any) => {
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


    setGrades([...grades, grade]);
  };

  // 해당 과목 성적 수정
  const handleGradesCallback = useCallback(
    (idx: number, value: Score, subjectName: string) => {
      console.log(grades)
      const gradeIdx = grades.findIndex((grade: any) => {
        return grade.subjectName === subjectName;
      });

      let grade = grades.find((grade: any) => {
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
        setGrades([
          ...grades.slice(0, gradeIdx),
          updateSemGrade(idx, value, grade),
          ...grades.slice(gradeIdx + 1, grades.length),
        ]);
      } else {
        setGrades([...grades, updateSemGrade(idx, value, grade)]);
      }
      setIsChanged(true);
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
        handleFreeSem={(value: FreeSemType) => setFreeSem(value)}
        addNewGrade={addNewGrade}
      />
    </>
  );
};

export default observer(WriteGradeListContainer);
