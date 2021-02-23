import React, { useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";
import WritePrint from "../../../components/Write/WritePrint";
import useStore from "lib/hooks/useStore";
import {
  ParentInfoResponse,
  ProfileInfoResponse,
  SchoolInfoResponse,
  SelfIntroductionResponse,
  StudyPlanResponse,
  UserInfoResponse,
} from "util/types/Response";
import moment from "moment";
import { handleLogin } from "lib/handleErrors";
import { useHistory } from "react-router-dom";
import Relation from "util/enums/Relation";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";

const WritePrintContainer = ({}) => {
  const history = useHistory();
  const { store } = useStore();
  const {
    getStudentInfo,
    getParentInfo,
    getSchoolInfo,
    getApplyType,
    getSelfIntroduce,
    getStudyPlan,
    getProfileImage,
  } = store.WriteStore;
  const { getScore } = store.ScoreStore;
  const { tryGetStatus } = store.StatusStore;

  const componentRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [studentTel, setStudentTel] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [parentTel, setParentTel] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [parentRelation, setParentRelation] = useState<Relation | null>(null);
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolTel, setSchoolTel] = useState<string>("");
  const [gradeType, setGradeType] = useState<Grade | null>(null);
  const [graduatedDate, setGraduatedDate] = useState<string>("");
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [applyType, setApplyType] = useState<Apply | null>(null);
  const [applyDetailType, setApplyDetailType] = useState<ApplyDetail | null>(
    null
  );
  const [verteransCity, setVerteransCity] = useState<string>("");
  const [verteransNumber, setVerteransNumber] = useState<string>("");
  const [grade1, setGrade1] = useState<number>(0);
  const [grade2, setGrade2] = useState<number>(0);
  const [absence, setAbsence] = useState<number>(0);
  const [volunteer, setVolunteer] = useState<number>(0);
  const [additional, setAdditional] = useState<number>(0);
  const [totalScore1, setTotalScore1] = useState<number>(0);
  const [totalScore2, setTotalScore2] = useState<number>(0);
  const [selfIntroduce, setSelfIntroduce] = useState<string>("");
  const [studyPlan, setStudyPlan] = useState<string>("");
  const [examCode, setExamCode] = useState<string>("");
  const [submitCode, setSubmitCode] = useState<string>("");

  const [profileImage, setProfileImage] = useState<string>("");

  const tryGetStatusCallback = useCallback(async () => {
    await tryGetStatus().then((res) => {
      setExamCode(res.data.examCode || "");
      setSubmitCode(res.data.submitCode || "");
    });
  }, []);

  useEffect(() => {
    tryGetStatusCallback();
  }, [tryGetStatusCallback]);

  const getStudentInfoCallback = useCallback(async () => {
    await getStudentInfo()
      .then((res: UserInfoResponse) => {
        setName(res.data.name || "");
        setBirth(moment(res.data.birth || "").format("yyyy년 MM월 DD일"));
        setStudentTel(res.data.studentTel || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getStudentInfoCallback();
  }, [getStudentInfoCallback]);

  const getProfileImageCallback = useCallback(async () => {
    await getProfileImage().then((res: ProfileInfoResponse) => {
      setProfileImage(res.data.profileImage || "");
    });
  }, []);

  useEffect(() => {
    getProfileImageCallback();
  }, []);

  const getParentInfoCallback = useCallback(() => {
    getParentInfo()
      .then((res: ParentInfoResponse) => {
        setAddress(res.data.address || "");
        setParentName(res.data.parentName || "");
        setParentRelation(res.data.parentRelation);
        setParentTel(res.data.parentTel || "");
        setPostCode(res.data.postCode || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getParentInfoCallback();
  }, [getParentInfoCallback]);

  const getSchoolInfoCallback = useCallback(() => {
    getSchoolInfo()
      .then((res: SchoolInfoResponse) => {
        setCityName(res.data.cityName || "");
        setSchoolCode(res.data.graduatedDate || "");
        setSchoolName(res.data.schoolName || "");
        setSchoolTel(res.data.schoolTel || "");
        setGradeType(res.data.gradeType || null);
        setGraduatedDate(res.data.graduatedDate || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getSchoolInfoCallback();
  }, [getSchoolInfoCallback]);

  const getApplyTypeCallback = useCallback(() => {
    getApplyType()
      .then((res) => {
        setApplyType(res.data.applyType);
        setApplyDetailType(res.data.applyDetailType);
        setVerteransCity(res.data.verteransCity || "");
        setVerteransNumber(res.data.verteransNumber || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getApplyTypeCallback();
  }, [getApplyTypeCallback]);

  const getScoreCallback = useCallback(() => {
    getScore()
      .then((res) => {
        setGrade1(res.data.grade1);
        setGrade2(res.data.grade2);
        setAbsence(res.data.absence);
        setVolunteer(res.data.volunteer);
        setAdditional(res.data.additional);
        if (res.data.isGed) {
          setTotalScore1(res.data.grade1);
          setTotalScore2(res.data.grade2);
        } else {
          setTotalScore1(
            res.data.grade1 +
              res.data.absence +
              res.data.volunteer +
              res.data.additional
          );
          setTotalScore2(
            res.data.grade2 +
              res.data.absence +
              res.data.volunteer +
              res.data.additional
          );
        }
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, [getScore]);

  useEffect(() => {
    getScoreCallback();
  }, [getScoreCallback]);

  const getSelfIntroduceCallBack = useCallback(() => {
    getSelfIntroduce()
      .then((res: SelfIntroductionResponse) => {
        setSelfIntroduce(res.data.selfIntroduction || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  const getStudyPlanCallBack = useCallback(() => {
    getStudyPlan()
      .then((res: StudyPlanResponse) => {
        setStudyPlan(res.data.studyPlan || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getSelfIntroduceCallBack();
    getStudyPlanCallBack();
  }, []);

  return (
    <>
      <WritePrint
        profileImage={profileImage}
        name={name}
        birth={birth}
        submitCode={submitCode}
        examCode={examCode}
        studentTel={studentTel}
        schoolTel={schoolTel}
        parentName={parentName}
        parentRelation={parentRelation}
        parentTel={parentTel}
        address={address}
        postCode={postCode}
        cityName={cityName}
        schoolName={schoolName}
        gradeType={gradeType}
        graduatedDate={graduatedDate}
        schoolCode={schoolCode}
        applyType={applyType}
        applyDetailType={applyDetailType}
        verteransCity={verteransCity}
        verteransNumber={verteransNumber}
        grade1={grade1}
        grade2={grade2}
        absence={absence}
        volunteer={volunteer}
        additional={additional}
        totalScore1={totalScore1}
        totalScore2={totalScore2}
        selfIntroduce={selfIntroduce}
        studyPlan={studyPlan}
        componentRef={componentRef}
      />
    </>
  );
};

export default observer(WritePrintContainer);
