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
  /* volunteer1Atom,
  volunteer2Atom,
  volunteer3Atom, */
} from "stores/Write/WriteAtom";
import volunteerType from "util/types/Volunteer";
import additionalType from "util/types/Additional";

interface WriteGradeAdditionalProps{
  volunteer:volunteerType;
  setVolunteer:React.Dispatch<React.SetStateAction<volunteerType>>;
  additional:additionalType;
  setAdditional:React.Dispatch<React.SetStateAction<additionalType>>;
}

// 성적 가산점 입력
const WriteGradeAdditionalContainer = ({
  volunteer,
  setVolunteer,
  additional,
  setAdditional
}:WriteGradeAdditionalProps) => {
  const { store } = useStore();

  const history = useNavigate();

  /* const [leadership11, setLeadership11] = useRecoilState(leadership11Atom);
  const [leadership12, setLeadership12] = useRecoilState(leadership12Atom);
  const [leadership21, setLeadership21] = useRecoilState(leadership21Atom);
  const [leadership22, setLeadership22] = useRecoilState(leadership22Atom);
  const [leadership31, setLeadership31] = useRecoilState(leadership31Atom);
  const [leadership32, setLeadership32] = useRecoilState(leadership32Atom);
  const [volunteer1, setVolunteer1] = useRecoilState(volunteer1Atom);
  const [volunteer2, setVolunteer2] = useRecoilState(volunteer2Atom);
  const [volunteer3, setVolunteer3] = useRecoilState(volunteer3Atom);
  const [prize, setPrize] = useRecoilState(prizeAtom); */
  const setIsChanged = useSetRecoilState(isChangedAtom);
  const gradeType = useRecoilValue(gradeTypeAtom);
  const getVolunteerAtom = useRecoilValue(getVolunteer);
  const getAdditionalAtom = useRecoilValue(getAdditional);

  // 가산점 조회
  const getAdditionalCallback = useCallback(async () => {
    await getAdditionalAtom()
      .then((res: any) => {
        setAdditional(res.data)
        /* setLeadership11(res.data.leadership11);
        setLeadership12(res.data.leadership12);
        setLeadership21(res.data.leadership21);
        setLeadership22(res.data.leadership22);
        setLeadership31(res.data.leadership31);
        setLeadership32(res.data.leadership32);
        setPrize(res.data.prize); */
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  // 봉사시간 조회
  const getVolunteerCallback = useCallback(() => {
    getVolunteerAtom().then((res: any) => {
      /* setVolunteer1(res.data.volunteer1);
      setVolunteer2(res.data.volunteer2);
      setVolunteer3(res.data.volunteer3); */
      setVolunteer(res.data)
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
        volunteer={volunteer}
        setVolunteer={setVolunteer}
        additional={additional}
        setAdditional={setAdditional}
        gradeType={gradeType}
        handleIsChanged={(value: boolean) => setIsChanged(value)}
      />
    </>
  );
};

export default observer(WriteGradeAdditionalContainer);
