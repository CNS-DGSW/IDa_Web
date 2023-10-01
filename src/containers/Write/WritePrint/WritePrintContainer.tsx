import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { observer } from "mobx-react";
import WritePrint from "../../../components/Write/WritePrint";
import useStore from "lib/hooks/useStore";
import {
  ParentInfoResponse,
  ProfileInfoResponse,
  ResultStatusResponse,
  SchoolInfoResponse,
  SelfIntroductionResponse,
  StudyPlanResponse,
  UserInfoResponse,
} from "util/types/Response";
import moment from "moment";
import { handleGetWriteError } from "lib/handleErrors";
import { useNavigate, useLocation } from "react-router-dom";
import Relation from "util/enums/Relation";
import Apply from "util/enums/Apply";
import ApplyDetail from "util/enums/ApplyDetail";
import Grade from "util/enums/Grade";
import FreeSemType from "util/types/FreeSem";
import ScoreGrade from "util/types/ScoreGrade";
import useQuery from "lib/hooks/useQuery";
import { getStudentInfo } from "stores/Write/util";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  getAdditional,
  getApplyType,
  getAttend,
  getGed,
  getGradeList,
  getParentInfo,
  getProfileImage,
  getSchoolInfo,
  getSelfIntroduce,
  getStudyPlan,
  getVolunteer,
  userIdxAtom,
} from "stores/Write/WriteAtom";
import StatusApi from "assets/api/StatusApi";
import {
  canAccessAtom,
  checkedPrintAtom,
  passAtom,
  printAtom,
  submitAtom,
} from "stores/Status/StatusAtom";

const WritePrintContainer = ({}) => {
  const setSubmit = useSetRecoilState(submitAtom);
  const setPrint = useSetRecoilState(printAtom);
  const setCheckedPrint = useSetRecoilState(checkedPrintAtom);
  const setPass = useSetRecoilState(passAtom);
  const setCanAccess = useSetRecoilState(canAccessAtom);
  const tryGetStatus = async (
    userIdx?: number | null
  ): Promise<ResultStatusResponse> => {
    // 1차 합격 여부 및 우편 원서 접수, 인터넷 원서 접수 현황
    const response: ResultStatusResponse = await StatusApi.GetStatus(userIdx);

    console.log(">>", response.data.isPassedFirstApply);
    // if (response.status === 200) {
    setSubmit(response.data.isSubmit); // 인터넷 원서 접수 현홍
    setPrint(response.data.isPrintedApplicationArrived); //  우편 원서 접수 현황
    setCheckedPrint(response.data.applicationChecked); //  우편 원서 검토 현황
    setPass(response.data.isPassedFirstApply); // 1차 합격 여부
    setCanAccess(response.data.canAccess);
    // }

    return response;
  };

  const history = useNavigate();
  const { store } = useStore();
  const getParentInfoAtom = useRecoilValue(getParentInfo);
  const getSchoolInfoAtom = useRecoilValue(getSchoolInfo);
  const getApplyTypeAtom = useRecoilValue(getApplyType);
  const getSelfIntroduceAtom = useRecoilValue(getSelfIntroduce);
  const getStudyPlanAtom = useRecoilValue(getStudyPlan);
  const getProfileImageAtom = useRecoilValue(getProfileImage);
  const getGradeListAtom = useRecoilValue(getGradeList);
  const getGedAtom = useRecoilValue(getGed);
  const getAttendAtom = useRecoilValue(getAttend);
  const getVolunteerAtom = useRecoilValue(getVolunteer);
  const getAdditionalAtom = useRecoilValue(getAdditional);
  const handleUserIdxAtom = useSetRecoilState(userIdxAtom);
  const { getScore } = store.ScoreStore;
  const query = useQuery();
  const { search } = useLocation();

  const componentRef = useRef<HTMLDivElement>(null);

  // 인쇄 페이지에서 모든 정보를 보여줘야 하기 때문에 어쩔 수 없는 state들...
  const [loading, setLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [studentTel, setStudentTel] = useState<string>("");
  const [parentBirth, setParentBirth] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [parentTel, setParentTel] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [detailAddress, setDetailAddress] = useState<string>("");
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
  const [freeSem, setFreeSem] = useState<FreeSemType>({
    freeSem11: false,
    freeSem12: false,
    freeSem21: false,
    freeSem22: false,
    freeSem31: false,
    freeSem32: false,
  });
  const [grades, setGrades] = useState<ScoreGrade[]>([]);
  const [englishScore, setEnglishScore] = useState<number>(0);
  const [koreanScore, setKoreanScore] = useState<number>(0);
  const [mathScore, setMathScore] = useState<number>(0);
  const [otherScore, setOtherScore] = useState<number>(0);
  const [socialScore, setSocialScore] = useState<number>(0);
  const [scienceScore, setScienceScore] = useState<number>(0);
  const [absence1, setAbsence1] = useState<number>(0);
  const [absence2, setAbsence2] = useState<number>(0);
  const [absence3, setAbsence3] = useState<number>(0);
  const [lateness1, setLateness1] = useState<number>(0);
  const [lateness2, setLateness2] = useState<number>(0);
  const [lateness3, setLateness3] = useState<number>(0);
  const [earlyLeave1, setEarlyLeave1] = useState<number>(0);
  const [earlyLeave2, setEarlyLeave2] = useState<number>(0);
  const [earlyLeave3, setEarlyLeave3] = useState<number>(0);
  const [absenceLecture1, setAbsenceLecture1] = useState<number>(0);
  const [absenceLecture2, setAbsenceLecture2] = useState<number>(0);
  const [absenceLecture3, setAbsenceLecture3] = useState<number>(0);
  const [leadership11, setLeadership11] = useState<boolean>(false);
  const [leadership12, setLeadership12] = useState<boolean>(false);
  const [leadership21, setLeadership21] = useState<boolean>(false);
  const [leadership22, setLeadership22] = useState<boolean>(false);
  const [leadership31, setLeadership31] = useState<boolean>(false);
  const [leadership32, setLeadership32] = useState<boolean>(false);
  const [prize, setPrize] = useState<number>(0);
  const [volunteer1, setVolunteer1] = useState<number>(0);
  const [volunteer2, setVolunteer2] = useState<number>(0);
  const [volunteer3, setVolunteer3] = useState<number>(0);
  const [teacherName, setTeacherName] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(true);
  const [sex,setSex] = useState<string>("")

  useLayoutEffect(() => {
    !search && alert("모든 출력물은 단면 인쇄해 주세요");
  }, []);
  //수험 번호 받아오는 함수
  const tryGetStatusCallback = useCallback(async () => {
    setIsSubmit(false);
    await tryGetStatus(Number(query.get("userIdx"))).then((res: any) => {
      setExamCode(res.data.examCode || "");
      setSubmitCode(res.data.submitCode || "");
      setIsSubmit(res.data.isSubmit);
    });
  }, []);

  //유저 정보 받아오는 함수
  const getStudentInfoCallback = useCallback(async () => {
    await getStudentInfo(Number(query.get("userIdx"))).then(
      (res: UserInfoResponse) => {
        setName(res.data.name || "");
        setBirth(
          isNaN(Date.parse(res.data.birth ? res.data.birth.toString() : ""))
            ? ""
            : moment(res.data.birth).format("yyyy. MM. DD.")
        );
        setStudentTel(res.data.studentTel || "");
        setSex(res.data.sex || "")
      }
    );
  }, []);

  //프로필 이미지 받아오는 함수
  const getProfileImageCallback = useCallback(async () => {
    await getProfileImageAtom().then((res: ProfileInfoResponse) => {
      setProfileImage(res.data.profileImage || "");
      console.log(res)
    });
    console.log(profileImage)
  }, []);

  //학부모 정보 받아오는 함수
  const getParentInfoCallback = useCallback(async () => {
    await getParentInfoAtom().then((res: ParentInfoResponse) => {
      setAddress(res.data.address || "");
      setDetailAddress(res.data.detailAddress || "");
      setParentName(res.data.parentName || "");
      setParentRelation(res.data.parentRelation);
      setParentTel(res.data.parentTel || "");
      setParentBirth(
        isNaN(
          Date.parse(
            res.data.parentBirth ? res.data.parentBirth.toString() : ""
          )
        )
          ? ""
          : moment(res.data.parentBirth).format("yyyy. MM. DD.")
      );
      setPostCode(res.data.postCode || "");
    });
  }, []);

  //학교 정보 받아오는 함수
  const getSchoolInfoCallback = useCallback(async () => {
    await getSchoolInfoAtom().then((res: SchoolInfoResponse) => {
      setTeacherName(res.data.teacherName || "");
      setCityName(res.data.cityName || "");
      setSchoolCode(res.data.schoolCode || "");
      setSchoolName(res.data.schoolName || "");
      setSchoolTel(res.data.schoolTel || "");
      setGradeType(res.data.gradeType || null);
      setGraduatedDate(res.data.graduatedDate || "");
    });
    console.log(schoolCode);
  }, []);

  //입학전형 받아오기
  const getApplyTypeCallback = useCallback(async () => {
    await getApplyTypeAtom().then((res: any) => {
      setApplyType(res.data.applyType);
      setApplyDetailType(res.data.applyDetailType);
      setVerteransCity(res.data.verteransCity || "");
      setVerteransNumber(res.data.verteransNumber || "");
    });
  }, []);

  //점수 받아오기
  const getScoreCallback = useCallback(async () => {
    await getScore(Number(query.get("userIdx"))).then((res: any) => {
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
    });
  }, [getScore]);

  //자기소개서 받아오기
  const getSelfIntroduceCallBack = useCallback(async () => {
    await getSelfIntroduceAtom().then((res: SelfIntroductionResponse) => {
      setSelfIntroduce(res.data.selfIntroduction || "");
    });
  }, []);

  //학업계획서 받아오기
  const getStudyPlanCallBack = useCallback(async () => {
    await getStudyPlanAtom().then((res: StudyPlanResponse) => {
      setStudyPlan(res.data.studyPlan || "");
    });
  }, []);

  //자유힉기제 여부 받아오기
  const getGradeCallback = useCallback(async () => {
    await getGradeListAtom().then((res: any) => {
      setFreeSem(res.data.freeSem);
      setGrades(res.data.grade);
    });
  }, []);

  //졸업 방식 받아오기
  const getGedCallback = useCallback(async () => {
    await getGedAtom().then((res: any) => {
      setKoreanScore(res.data.score.koreanScore);
      setEnglishScore(res.data.score.englishScore);
      setMathScore(res.data.score.mathScore);
      setOtherScore(res.data.score.otherScore);
      setScienceScore(res.data.score.scienceScore);
      setSocialScore(res.data.score.socialScore);
    });
  }, []);

  //출결상황 받아오기
  const getAbttendCallback = useCallback(async () => {
    await getAttendAtom().then((res: any) => {
      setAbsence1(res.data.absence1);
      setAbsence2(res.data.absence2);
      setAbsence3(res.data.absence3);
      setLateness1(res.data.lateness1);
      setLateness2(res.data.lateness2);
      setLateness3(res.data.lateness3);
      setAbsenceLecture1(res.data.absenceLecture1);
      setAbsenceLecture2(res.data.absenceLecture2);
      setAbsenceLecture3(res.data.absenceLecture3);
      setEarlyLeave1(res.data.earlyLeave1);
      setEarlyLeave2(res.data.earlyLeave2);
      setEarlyLeave3(res.data.earlyLeave3);
    });
  }, []);

  //가산점 목록 받아오기
  const getAdditionalCallback = useCallback(async () => {
    await getAdditionalAtom().then((res: any) => {
      setLeadership11(res.data.leadership11);
      setLeadership12(res.data.leadership12);
      setLeadership21(res.data.leadership21);
      setLeadership22(res.data.leadership22);
      setLeadership31(res.data.leadership31);
      setLeadership32(res.data.leadership32);
      setPrize(res.data.prize);
    });
  }, []);

  //봉사활동 받아오기
  const getVolunteerCallback = useCallback(async () => {
    await getVolunteerAtom().then((res: any) => {
      setVolunteer1(res.data.volunteer1);
      setVolunteer2(res.data.volunteer2);
      setVolunteer3(res.data.volunteer3);
    });
  }, []);

  const getAllStates = useCallback(async () => {
    const promises: Promise<void>[] = [
      getVolunteerCallback(),
      getAdditionalCallback(),
      getAbttendCallback(),
      getGradeCallback(),
      getGedCallback(),
      getStudentInfoCallback(),
      getApplyTypeCallback(),
      getParentInfoCallback(),
      getProfileImageCallback(),
      getSchoolInfoCallback(),
      getScoreCallback(),
      tryGetStatusCallback(),
      getSelfIntroduceCallBack(),
      getStudyPlanCallBack(),
    ];

    await Promise.all(promises).catch((err) => {
      handleGetWriteError(err, history);
    });
    setLoading(false);
  }, [
    getVolunteerCallback,
    getAdditionalCallback,
    getAbttendCallback,
    getGedCallback,
    getGradeCallback,
    getApplyTypeCallback,
    getParentInfoCallback,
    getProfileImageCallback,
    getSchoolInfoCallback,
    getScoreCallback,
    tryGetStatusCallback,
    getSelfIntroduceCallBack,
    getStudyPlanCallBack,
    getStudentInfoCallback,
  ]);

  useEffect(() => {
    if (query.get("userIdx")) {
      handleUserIdxAtom(Number(query.get("userIdx")));
    }
  }, [search]);

  useEffect(() => {
    getAllStates();
  }, [getAllStates]);

  useEffect(() => {
    if (componentRef && componentRef.current && !loading) {
      const content = document.getElementById("print-printBtn");
      if (
        content &&
        (!query.get("auto") ||
          (query.get("auto") && query.get("auto") === "true"))
      ) {
        content.click();
      }
    }
  }, [loading, componentRef]);

  return (
    <>
      <WritePrint
        isSubmit={isSubmit}
        detailAddress={detailAddress}
        teacherName={teacherName}
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
        grades={grades}
        freeSem={freeSem}
        koreanScore={koreanScore}
        mathScore={mathScore}
        englishScore={englishScore}
        otherScore={otherScore}
        scienceScore={scienceScore}
        socialScore={socialScore}
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
        parentBirth={parentBirth}
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
        sex={sex}
      />
    </>
  );
};

export default observer(WritePrintContainer);
