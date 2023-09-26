import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteAttend from "components/Write/WriteAttend";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { handleGetWriteError } from "lib/handleErrors";

// 출결 입력
const WriteGradeAttendContainer = ({}) => {
  const { store } = useStore();

  const history = useNavigate();

  const {
    absence1,
    absence2,
    absence3,
    lateness1,
    lateness2,
    lateness3,
    earlyLeave1,
    earlyLeave2,
    earlyLeave3,
    absenceLecture1,
    absenceLecture2,
    absenceLecture3,
  } = store.WriteStore;

  const {
    handleAbsence1,
    handleAbsence2,
    handleAbsence3,
    handleLateness1,
    handleLateness2,
    handleLateness3,
    handleEarlyLeave1,
    handleEarlyLeave2,
    handleEarlyLeave3,
    handleAbsenceLecture1,
    handleAbsenceLecture2,
    handleAbsenceLecture3,
    handleIsChanged,
    getAttend,
  } = store.WriteStore;

  // 출결 조회
  const getAttendCallback = useCallback(async () => {
    await getAttend()
      .then((res) => {
        handleAbsence1(res.data.absence1);
        handleAbsence2(res.data.absence2);
        handleAbsence3(res.data.absence3);
        handleLateness1(res.data.lateness1);
        handleLateness2(res.data.lateness2);
        handleLateness3(res.data.lateness3);
        handleEarlyLeave1(res.data.earlyLeave1);
        handleEarlyLeave2(res.data.earlyLeave2);
        handleEarlyLeave3(res.data.earlyLeave3);
        handleAbsenceLecture1(res.data.absenceLecture1);
        handleAbsenceLecture2(res.data.absenceLecture2);
        handleAbsenceLecture3(res.data.absenceLecture3);
      })
      .catch((err) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getAttendCallback();
  }, [getAttendCallback]);

  return (
    <>
      <WriteAttend
        absence1={absence1}
        absence2={absence2}
        absence3={absence3}
        lateness1={lateness1}
        lateness2={lateness2}
        lateness3={lateness3}
        earlyLeave1={earlyLeave1}
        earlyLeave2={earlyLeave2}
        earlyLeave3={earlyLeave3}
        absenceLecture1={absenceLecture1}
        absenceLecture2={absenceLecture2}
        absenceLecture3={absenceLecture3}
        handleIsChanged={handleIsChanged}
        handleAbsence1={handleAbsence1}
        handleAbsence2={handleAbsence2}
        handleAbsence3={handleAbsence3}
        handleLateness1={handleLateness1}
        handleLateness2={handleLateness2}
        handleLateness3={handleLateness3}
        handleEarlyLeave1={handleEarlyLeave1}
        handleEarlyLeave2={handleEarlyLeave2}
        handleEarlyLeave3={handleEarlyLeave3}
        handleAbsenceLecture1={handleAbsenceLecture1}
        handleAbsenceLecture2={handleAbsenceLecture2}
        handleAbsenceLecture3={handleAbsenceLecture3}
      />
    </>
  );
};

export default observer(WriteGradeAttendContainer);
