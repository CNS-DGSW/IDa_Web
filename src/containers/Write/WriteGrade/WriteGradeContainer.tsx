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
  getSchoolInfo,
  gradeTypeAtom,
  gradesAtom,
  isChangedAtom,
  pageAtom,
} from "stores/Write/WriteAtom";

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
  const setGrades = useSetRecoilState(gradesAtom);
  const [saved, setSaved] = useState<boolean>(false);

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if (gradeType !== Grade.GED) {
      const promises = [
        editGradeAtom(),
        editVolunteerAtom(),
        editAttendAtom(),
        editAdditionalAtom(),
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
      await editGedAtom()
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
  }, [gradeType]);

  //학교정보 확인 함수
  const checkSchool = useCallback(async () => {
    await getSchoolInfoAtom().then((res: any) => {
      setGrades(res.data.gradeType);
      if (!res.data.gradeType) {
        toast.warning("학교 정보를 먼저 입력해주세요.");
        setPage(3);
      }
    });
  }, []);

  // useEffect(() => {
  //   checkSchool();
  // }, [checkSchool]);

  useEffect(() => {
    setIsChanged(false);
  }, [page]);

  return (
    <>
      <WriteGrade
        saved={saved}
        setSaved={setSaved}
        gradeType={gradeType}
        onSave={onSave}
        isChanged={isChanged}
      />
    </>
  );
};

export default observer(WriteGradeContainer);
