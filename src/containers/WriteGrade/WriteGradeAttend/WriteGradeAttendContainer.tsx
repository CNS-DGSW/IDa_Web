import React from "react";
import { observer } from "mobx-react";
import WriteAttend from "../../../components/common/WriteAttend";
import useStore from "lib/hooks/useStore";

const WriteGradeAttendContainer = ({}) => {
  const { store } = useStore();

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
  } = store.WriteStore;

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
      ></WriteAttend>
    </>
  );
};

export default observer(WriteGradeAttendContainer);
