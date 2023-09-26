import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../../components/Write/WriteGrades";
import useStore from "lib/hooks/useStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Grade from "util/enums/Grade";
import { handleWriteError } from "lib/handleErrors";

const WriteGradeContainer = ({}) => {
  const { store } = useStore();

  const history = useNavigate();

  const {
    pageHandle,
    gradeType,
    editGrade,
    editAdditional,
    editAttend,
    editVolunteer,
    editGed,
    isChanged,
    handleIsChanged,
    getSchoolInfo,
    handleGrade,
    page,
  } = store.WriteStore;

  const [saved, setSaved] = useState<boolean>(false);

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    if (gradeType !== Grade.GED) {
      const promises = [
        editGrade(),
        editVolunteer(),
        editAttend(),
        editAdditional(),
      ];

      await Promise.all(promises)
        .then(() => {
          handleIsChanged(false);
          setSaved(true);
        })
        .catch((err) => {
          handleWriteError(err, history);
          flag = false;
        });
    } else {
      await editGed()
        .then(() => {
          handleIsChanged(false);
          setSaved(true);
        })
        .catch((err) => {
          handleWriteError(err, history);
          flag = false;
        });
    }

    return flag;
  }, [gradeType]);

  //학교정보 확인 함수
  const checkSchool = useCallback(async () => {
    await getSchoolInfo().then((res) => {
      handleGrade(res.data.gradeType);
      if (!res.data.gradeType) {
        toast.warning("학교 정보를 먼저 입력해주세요.");
        pageHandle(3);
      }
    });
  }, []);

  // useEffect(() => {
  //   checkSchool();
  // }, [checkSchool]);

  useEffect(() => {
    handleIsChanged(false);
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
