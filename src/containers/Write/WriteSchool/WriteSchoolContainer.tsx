import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import WriteSchool from "../../../components/Write/WriteSchool";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Grade from "util/enums/Grade";
import { handleGetWriteError, handleWriteError } from "lib/handleErrors";
import { useRecoilState, useRecoilValue } from "recoil";
import { gradeTypeAtom, userIdxAtom } from "stores/Write/WriteAtom";
import { SchoolInfoResponse } from "util/types/Response";
import { editSchoolInfo, getSchoolInfo } from "stores/Write/util";

const WriteSchoolContainer = ({}) => {
  const history = useNavigate();
  const userIdx = useRecoilValue(userIdxAtom);

  const [cityLocation, setCityLocation] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [graduatedDate, setGraduatedDate] = useState<string>("");
  const [schoolCode, setSchoolCode] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolTel, setSchoolTel] = useState<string>("");
  const [teacherName, setTeacherName] = useState<string>("");
  const [teacherTel, setTeacherTel] = useState<string>("");
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [gradeType, setGradeType] = useRecoilState(gradeTypeAtom);
  const editSchoolInfoAtom = editSchoolInfo;
  const getSchoolInfoAtom = getSchoolInfo;

  useEffect(() => {
    if (schoolTel) {
      if (schoolTel.length === 10) {
        setSchoolTel(schoolTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (schoolTel.length === 13) {
        setSchoolTel(
          schoolTel
            .replace(/-/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }
  }, [schoolTel]);

  useEffect(() => {
    if (teacherTel) {
      if (teacherTel.length === 10) {
        setTeacherTel(teacherTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (teacherTel.length === 13) {
        setTeacherTel(
          teacherTel
            .replace(/-/g, "")
            .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }
  }, [teacherTel]);

  //변경사항 저장 함수
  const onSave = useCallback(async () => {
    let flag = true;
    const passRule = /^\d{3}-\d{3,4}-\d{4}$/;

    if (
      gradeType === Grade.UNGRADUATED &&
      (!passRule.test(teacherTel) || !passRule.test(schoolTel))
    ) {
      toast.warning("올바르지 않은 전화번호입니다. '-' 를 포함하여주세요.");
      flag = false;
    } else if (gradeType === Grade.GRADUATED && !passRule.test(schoolTel)) {
      toast.warning("올바르지 않은 전화번호입니다. '-' 를 포함하여주세요.");
      flag = false;
    } else if (
      (gradeType === Grade.GED && graduatedDate) ||
      (gradeType === Grade.GRADUATED && graduatedDate) ||
      (cityLocation &&
        cityName &&
        ((gradeType === Grade.GRADUATED && graduatedDate) ||
          gradeType === Grade.UNGRADUATED) &&
        schoolCode &&
        schoolName &&
        schoolTel &&
        teacherName &&
        teacherTel)
    ) {
      if (
        (gradeType === Grade.GRADUATED || gradeType === Grade.GED) &&
        (Number(graduatedDate) < 2010 || Number(graduatedDate) > 2023)
      ) {
        toast.warning("올바른 년도를 입력해주세요.");
        flag = false;
      }
      await editSchoolInfoAtom({
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel,
        userIdx,
      })
        .then(() => {
          setGradeType(gradeType);
        })
        .catch((err: any) => {
          handleWriteError(err, history);
          flag = false;
        });
      setIsChanged(false);
    } else {
      toast.warning("빈칸을 채워주세요.");
      flag = false;
    }
    return flag;
  }, [
    cityLocation,
    cityName,
    gradeType,
    graduatedDate,
    schoolCode,
    schoolName,
    schoolTel,
    teacherName,
    teacherTel,
  ]);

  //학교 정보 받아오기
  const getSchoolInfoCallback = useCallback(() => {
    getSchoolInfoAtom({ userIdx })
      .then((res: SchoolInfoResponse) => {
        setCityLocation(res.data.cityLocation || "");
        setCityName(res.data.cityName || "");
        setGradeType(res.data.gradeType);
        setGraduatedDate(res.data.graduatedDate || "");
        setSchoolCode(res.data.schoolCode || "");
        setSchoolName(res.data.schoolName || "");
        setSchoolTel(res.data.schoolTel || "");
        setTeacherName(res.data.teacherName || "");
        setTeacherTel(res.data.teacherTel || "");
      })
      .catch((err: any) => {
        handleGetWriteError(err, history);
      });
  }, []);

  useEffect(() => {
    getSchoolInfoCallback();
  }, [getSchoolInfoCallback]);

  useEffect(() => {
    return () => {
      setCityLocation("");
      setCityName("");
      setGraduatedDate("");
      setSchoolCode("");
      setSchoolName("");
      setSchoolTel("");
      setTeacherTel("");
      setTeacherName("");
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      <WriteSchool
        isChanged={isChanged}
        gradeType={gradeType}
        handleGrade={(props) => {
          setGradeType(props);
        }}
        cityLocation={cityLocation}
        setCityLocation={setCityLocation}
        cityName={cityName}
        setCityName={setCityName}
        graduatedDate={graduatedDate}
        setGraduatedDate={setGraduatedDate}
        schoolCode={schoolCode}
        setSchoolCode={setSchoolCode}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        schoolTel={schoolTel}
        setSchoolTel={setSchoolTel}
        teacherName={teacherName}
        setTeacherName={setTeacherName}
        teacherTel={teacherTel}
        setTeacherTel={setTeacherTel}
        isOpen={isOpen}
        onSave={onSave}
        setIsOpen={setIsOpen}
        setIsChanged={setIsChanged}
      />
    </>
  );
};

export default observer(WriteSchoolContainer);
