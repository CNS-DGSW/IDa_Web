import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteAttend from "components/Write/WriteAttend";
import { useNavigate } from "react-router-dom";
import { handleGetWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  /* absence1Atom,
  absence2Atom,
  absence3Atom,
  absenceLecture1Atom,
  absenceLecture2Atom,
  absenceLecture3Atom,
  earlyLeave1Atom,
  earlyLeave2Atom,
  earlyLeave3Atom,
  lateness1Atom,
  lateness2Atom,
  lateness3Atom, */
  getAttend,
  isChangedAtom,
} from "stores/Write/WriteAtom";
import AttendType from "util/types/Attend";

interface WriteGradeAttendProps {
  attend: AttendType;
  setAttend: React.Dispatch<React.SetStateAction<AttendType>>;
}

// 출결 입력
const WriteGradeAttendContainer = ({
  attend,
  setAttend,
}: WriteGradeAttendProps) => {
  const history = useNavigate();
  const setIsChanged = useSetRecoilState(isChangedAtom);
  /* const [absence1, setAbsence1] = useRecoilState(absence1Atom);
  const [absence2, setAbsence2] = useRecoilState(absence2Atom);
  const [absence3, setAbsence3] = useRecoilState(absence3Atom);
  const [lateness1, setLateness1] = useRecoilState(lateness1Atom);
  const [lateness2, setLateness2] = useRecoilState(lateness2Atom);
  const [lateness3, setLateness3] = useRecoilState(lateness3Atom);
  const [earlyLeave1, setEarlyLeave1] = useRecoilState(earlyLeave1Atom);
  const [earlyLeave2, setEarlyLeave2] = useRecoilState(earlyLeave2Atom);
  const [earlyLeave3, setEarlyLeave3] = useRecoilState(earlyLeave3Atom);
  const [absenceLecture1, setAbsenceLecture1] =
    useRecoilState(absenceLecture1Atom);
  const [absenceLecture2, setAbsenceLecture2] =
    useRecoilState(absenceLecture2Atom);
  const [absenceLecture3, setAbsenceLecture3] =
    useRecoilState(absenceLecture3Atom); */
  const getAttendAtom = useRecoilValue(getAttend);
  // 출결 조회
  const getAttendCallback = useCallback(async () => {
    await getAttendAtom()
      .then((res: any) => {
        /* setAbsence1(res.data.absence1);
        setAbsence2(res.data.absence2);
        setAbsence3(res.data.absence3);
        setLateness1(res.data.lateness1);
        setLateness2(res.data.lateness2);
        setLateness3(res.data.lateness3);
        setEarlyLeave1(res.data.earlyLeave1);
        setEarlyLeave2(res.data.earlyLeave2);
        setEarlyLeave3(res.data.earlyLeave3);
        setAbsenceLecture1(res.data.absenceLecture1);
        setAbsenceLecture2(res.data.absenceLecture2);
        setAbsenceLecture3(res.data.absenceLecture3); */
        setAttend(res.data);
        // console.log(res)
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getAttendCallback();
  }, [getAttendCallback]);

  return (
    <>
      <WriteAttend
        /* absence1={absence1}
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
        handleAbsence1={(value: number) => setAbsence1(value)}
        handleAbsence2={(value: number) => setAbsence2(value)}
        handleAbsence3={(value: number) => setAbsence3(value)}
        handleLateness1={(value: number) => setLateness1(value)}
        handleLateness2={(value: number) => setLateness2(value)}
        handleLateness3={(value: number) => setLateness3(value)}
        handleEarlyLeave1={(value: number) => setEarlyLeave1(value)}
        handleEarlyLeave2={(value: number) => setEarlyLeave2(value)}
        handleEarlyLeave3={(value: number) => setEarlyLeave3(value)}
        handleAbsenceLecture1={(value: number) => setAbsenceLecture1(value)}
        handleAbsenceLecture2={(value: number) => setAbsenceLecture2(value)}
        handleAbsenceLecture3={(value: number) => setAbsenceLecture3(value)} */

        handleIsChanged={(value: boolean) => setIsChanged(value)}
        attend={attend}
        setAttend={setAttend}
      />
    </>
  );
};

export default observer(WriteGradeAttendContainer);
