import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../../components/Write/WriteGrades";
import useStore from "lib/hooks/useStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Grade from "util/enums/Grade";
import { handleWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  editAdditional,
  editAttend,
  editGed,
  editGrade,
  editVolunteer,
  freeSemAtom,
  getSchoolInfo,
  gradeTypeAtom,
  gradesAtom,
  isChangedAtom,
  pageAtom,
} from "stores/Write/WriteAtom";
import ScoreGrade from "util/types/ScoreGrade";
import FreeSemType from "util/types/FreeSem";
import Score from "util/enums/Score";

const WriteGradeContainer = ({}) => {
  const history = useNavigate();

  const [page, setPage] = useRecoilState(pageAtom);
  const gradeType = useRecoilValue(gradeTypeAtom);
  const [isChanged, setIsChanged] = useRecoilState(isChangedAtom);
  const editVolunteerAtom = useRecoilValue(editVolunteer);
  const editGradeAtom = useRecoilValue(editGrade);
  const editAdditionalAtom = useRecoilValue(editAdditional);
  const editAttendAtom = useRecoilValue(editAttend);
  const editGedAtom = useRecoilValue(editGed);
  const getSchoolInfoAtom = useRecoilValue(getSchoolInfo);
  // const setGrades = useSetRecoilState(gradesAtom);
  const [saved, setSaved] = useState<boolean>(false);
  const [isSchoolChecked, setIsSchoolChecked] = useState<boolean>(false);

  // const freeSem = useRecoilValue(freeSemAtom)

  const [grades, setGrades] = useState<ScoreGrade[]>([
    {
      score11: Score.NONE,
      score12: Score.NONE,
      score21: Score.NONE,
      score22: Score.NONE,
      score31: Score.NONE,
      score32: Score.NONE,
      subjectName: "",
    },
  ]);
  const [freeSem, setFreeSem] = useState<FreeSemType>({
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  });

  const [attend, setAttend] = useState({
    absence1: 0,
    absence2: 0,
    absence3: 0,
    absenceLecture1: 0,
    absenceLecture2: 0,
    absenceLecture3: 0,
    earlyLeave1: 0,
    earlyLeave2: 0,
    earlyLeave3: 0,
    lateness1: 0,
    lateness2: 0,
    lateness3: 0,
  });

  const [volunteer, setVolunteer] = useState({
    volunteer1: 0,
    volunteer2: 0,
    volunteer3: 0,
  });

  const [additional, setAdditional] = useState({
    leadership11: true,
    leadership12: true,
    leadership21: true,
    leadership22: true,
    leadership31: true,
    leadership32: true,
    prize: 0,
  });

  // 검정고시 점수
  const [gedScore,SetGedScore] = useState({
    englishScore: 0,
    koreanScore: 0,
    mathScore: 0,
    otherScore: 0,
    scienceScore: 0,
    socialScore: 0
  })

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;

    if (gradeType !== Grade.GED) {
      const promises = [
        editGradeAtom(grades, freeSem),
        editAttendAtom(attend),
        editVolunteerAtom(volunteer),
        editAdditionalAtom(additional),
      ];

      await Promise.all(promises)
        .then(() => {
          setIsChanged(false);
          setSaved(true);
        })
        .catch((err) => {
          handleWriteError(err, history);
          flag = false;
        });
    } else {
      await editGedAtom(
        gedScore
      )
        .then(() => {
          setIsChanged(false);
          setSaved(true);
        })
        .catch((err: any) => {
          handleWriteError(err, history);
          flag = false;
        });
    }

    return flag; 
  }, [gradeType,grades,freeSem,attend,volunteer,additional,gedScore]); 

  //학교정보 확인 함수
  const checkSchool = useCallback(async () => {
    await getSchoolInfoAtom()
      .then((res: any) => {
        //setGrades(res.data.gradeType);
        if (!res.data.gradeType) {
          toast.warning("학교 정보를 먼저 입력해주세요.");
          setPage(3);
        }
        setIsSchoolChecked(true);
      })
      .catch((err: any) => {
        //handleWriteError(err,history)
        //setPage(3);
        console.error(err);
      });
  }, []);

  useEffect(() => {
    checkSchool();
  }, [checkSchool]);

  useEffect(() => {
    setIsChanged(false);
  }, [page]);

  if (!isSchoolChecked) {
    return <h1>학교를 확인 중입니다</h1>;
  }

  return (
    <>
      <WriteGrade
        saved={saved}
        setSaved={setSaved}
        gradeType={gradeType}
        onSave={onSave}
        isChanged={isChanged}
        grades={grades}
        setGrades={setGrades}
        freeSem={freeSem}
        setFreeSem={setFreeSem}
        attend={attend}
        setAttend={setAttend}
        volunteer={volunteer}
        setVolunteer={setVolunteer}
        additional={additional}
        setAdditional={setAdditional}

        gedScore={gedScore}
        setGedScore={SetGedScore}
      />
    </>
  );
};

export default observer(WriteGradeContainer);
