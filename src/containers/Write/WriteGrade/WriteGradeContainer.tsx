import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../../components/Write/WriteGrades";
import useStore from "lib/hooks/useStore";
import { toast } from "react-toastify";
import { useHistory, withRouter } from "react-router-dom";
import Grade from "util/enums/Grade";

const WriteGradeContainer = ({}) => {
  const { store } = useStore();

  const history = useHistory();

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
    page,
  } = store.WriteStore;

  const onSave = useCallback(async () => {
    let flag = true;
    if (gradeType !== Grade.GED) {
      const promises = [editGrade(), editVolunteer(), editAttend(), editAdditional()];

      await Promise.all(promises)
        .then(() => {
          handleIsChanged(false);
        })
        .catch((err: Error) => {
          if (err.message.includes("401") || err.message.includes("410")) {
            history.push("/login");
            toast.warn("로그인이 필요합니다.");
          } else if (err.message.includes("403")) {
            toast.warn("이미 제출하셨습니다.");
          } else {
            toast.error("서버 오류입니다.");
          }
          flag = false;
        });
    } else {
      await editGed()
        .then(() => {
          handleIsChanged(false);
        })
        .catch((err: Error) => {
          if (err.message.includes("401") || err.message.includes("410")) {
            history.push("/login");
            toast.warn("로그인이 필요합니다.");
          } else if (err.message.includes("400")) {
            toast.warn("0에서 100까지 숫자를 입력해주세요.");
          } else {
            toast.error("서버 오류입니다.");
          }
          flag = false;
        });
    }

    return flag;
  }, [gradeType]);

  useEffect(() => {
    if (!gradeType) {
      toast.warn("학교 정보를 먼저 입력해주세요.");
      pageHandle(3);
    }
  }, [gradeType]);

  useEffect(() => {
    handleIsChanged(false);
  }, [page]);

  return (
    <>
      <WriteGrade gradeType={gradeType} onSave={onSave} isChanged={isChanged} />
    </>
  );
};

export default withRouter(observer(WriteGradeContainer));
