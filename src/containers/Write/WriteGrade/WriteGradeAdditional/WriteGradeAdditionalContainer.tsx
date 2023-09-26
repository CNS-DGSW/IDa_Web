import React, { useCallback, useEffect } from "react";
import { observer } from "mobx-react";
import WriteAdditional from "components/Write/WriteAdditional";
import useStore from "lib/hooks/useStore";
import { useNavigate } from "react-router-dom";
import { handleGetWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  getAdditional,
  getVolunteer,
  gradeTypeAtom,
  isChangedAtom,
  leadership11Atom,
  leadership12Atom,
  leadership21Atom,
  leadership22Atom,
  leadership31Atom,
  leadership32Atom,
  prizeAtom,
  volunteer1Atom,
  volunteer2Atom,
  volunteer3Atom,
} from "stores/Write/WriteAtom";

// 성적 가산점 입력
const WriteGradeAdditionalContainer = ({}) => {
  const { store } = useStore();

  const history = useNavigate();

  const [leadership11, setLeadership11] = useRecoilState(leadership11Atom);
  const [leadership12, setLeadership12] = useRecoilState(leadership12Atom);
  const [leadership21, setLeadership21] = useRecoilState(leadership21Atom);
  const [leadership22, setLeadership22] = useRecoilState(leadership22Atom);
  const [leadership31, setLeadership31] = useRecoilState(leadership31Atom);
  const [leadership32, setLeadership32] = useRecoilState(leadership32Atom);
  const [volunteer1, setVolunteer1] = useRecoilState(volunteer1Atom);
  const [volunteer2, setVolunteer2] = useRecoilState(volunteer2Atom);
  const [volunteer3, setVolunteer3] = useRecoilState(volunteer3Atom);
  const [prize, setPrize] = useRecoilState(prizeAtom);
  const setIsChanged = useSetRecoilState(isChangedAtom);
  const gradeType = useRecoilValue(gradeTypeAtom);
  const getVolunteerAtom = useRecoilValue(getVolunteer);
  const getAdditionalAtom = useRecoilValue(getAdditional);

  // 가산점 조회
  const getAdditionalCallback = useCallback(async () => {
    await getAdditionalAtom()
      .then((res: any) => {
        setLeadership11(res.data.leadership11);
        setLeadership12(res.data.leadership12);
        setLeadership21(res.data.leadership21);
        setLeadership22(res.data.leadership22);
        setLeadership31(res.data.leadership31);
        setLeadership32(res.data.leadership32);
        setPrize(res.data.prize);
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  // 봉사시간 조회
  const getVolunteerCallback = useCallback(() => {
    getVolunteerAtom().then((res: any) => {
      setVolunteer1(res.data.volunteer1);
      setVolunteer2(res.data.volunteer2);
      setVolunteer3(res.data.volunteer3);
    });
  }, []);

  useEffect(() => {
    getAdditionalCallback();
  }, [getAdditionalCallback]);

  useEffect(() => {
    getVolunteerCallback();
  }, [getVolunteerCallback]);

  return (
    <>
      <WriteAdditional
        leadership11={leadership11}
        leadership12={leadership12}
        leadership21={leadership21}
        leadership22={leadership22}
        leadership31={leadership31}
        leadership32={leadership32}
        prize={prize}
        volunteer1={volunteer1}
        volunteer2={volunteer2}
        volunteer3={volunteer3}
        gradeType={gradeType}
        handleIsChanged={(value: boolean) => setIsChanged(value)}
        handleLeadership11={(value: boolean) => setLeadership11(value)}
        handleLeadership12={(value: boolean) => setLeadership12(value)}
        handleLeadership21={(value: boolean) => setLeadership21(value)}
        handleLeadership22={(value: boolean) => setLeadership22(value)}
        handleLeadership31={(value: boolean) => setLeadership31(value)}
        handleLeadership32={(value: boolean) => setLeadership32(value)}
        handleVolunteer1={(value: number) => setVolunteer1(value)}
        handleVolunteer2={(value: number) => setVolunteer2(value)}
        handleVolunteer3={(value: number) => setVolunteer3(value)}
        handlePrize={(value: number) => setPrize(value)}
      />
    </>
  );
};

export default observer(WriteGradeAdditionalContainer);
