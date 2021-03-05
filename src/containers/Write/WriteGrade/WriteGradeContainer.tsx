import React, { useCallback, useEffect, useLayoutEffect } from "react";
import { observer } from "mobx-react";
import WriteGrade from "../../../components/Write/WriteGrades";
import useStore from "lib/hooks/useStore";
import { toast } from "react-toastify";
import { useHistory, withRouter } from "react-router-dom";
import Grade from "util/enums/Grade";
import { handleWriteError } from "lib/handleErrors";

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
      const promises = [
        editGrade(),
        editVolunteer(),
        editAttend(),
        editAdditional(),
      ];

      await Promise.all(promises)
        .then(() => {
          handleIsChanged(false);
        })
        .catch((err: Error) => {
          handleWriteError(err, history);
          flag = false;
        });
    } else {
      await editGed()
        .then(() => {
          handleIsChanged(false);
        })
        .catch((err: Error) => {
          handleWriteError(err, history);
          flag = false;
        });
    }

    return flag;
  }, [gradeType]);

  useLayoutEffect(() => {
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
