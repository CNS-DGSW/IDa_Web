import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteSchool from "../../../components/Write/WriteSchool";
import { SchoolInfoResponse } from "util/types/Response";
import { useHistory, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import Grade from "util/enums/Grade";
import { handleLogin, handleWriteError } from "lib/handleErrors";

const WriteSchoolContainer = ({}) => {
  const { store } = useStore();
  const history = useHistory();

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

  const { gradeType, handleGrade, editSchoolInfo, getSchoolInfo } = store.WriteStore;

  const onSave = useCallback(async () => {
    let flag = true;
    if (
      (gradeType === Grade.GED && graduatedDate) ||
      (cityLocation &&
        cityName &&
        ((gradeType === Grade.GRADUATED && graduatedDate) || gradeType === Grade.UNGRADUATED) &&
        schoolCode &&
        schoolName &&
        schoolTel &&
        teacherName &&
        teacherTel)
    ) {
      if ((gradeType === Grade.GRADUATED || gradeType === Grade.GED) && Number(graduatedDate) < 2010) {
        toast.warn("올바른 년도를 입력해주세요.");
        flag = false;
      }
      await editSchoolInfo(
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel
      )
        .then(() => {
          handleGrade(gradeType);
        })
        .catch((err: Error) => {
          handleWriteError(err, history);
          flag = false;
        });
      setIsChanged(false);
    } else {
      toast.warn("빈칸을 채워주세요.");
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

  const getSchoolInfoCallback = useCallback(() => {
    getSchoolInfo()
      .then((res: SchoolInfoResponse) => {
        setCityLocation(res.data.cityLocation || "");
        setCityName(res.data.cityName || "");
        handleGrade(res.data.gradeType);
        setGraduatedDate(res.data.graduatedDate || "");
        setSchoolCode(res.data.graduatedDate || "");
        setSchoolName(res.data.schoolName || "");
        setSchoolTel(res.data.schoolTel || "");
        setTeacherName(res.data.teacherName || "");
        setTeacherTel(res.data.teacherTel || "");
      })
      .catch((err: Error) => {
        handleLogin(err, history);
      });
  }, []);

  useEffect(() => {
    getSchoolInfoCallback();
  }, []);

  useEffect(() => {
    if (schoolTel) {
      if (schoolTel.length === 10) {
        setSchoolTel(schoolTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (schoolTel.length === 13) {
        setSchoolTel(schoolTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
      }
    }
  }, [schoolTel]);

  useEffect(() => {
    if (teacherTel) {
      if (teacherTel.length === 10) {
        setTeacherTel(teacherTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (teacherTel.length === 13) {
        setTeacherTel(teacherTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
      }
    }
  }, [teacherTel]);

  return (
    <>
      <WriteSchool
        isChanged={isChanged}
        gradeType={gradeType}
        handleGrade={handleGrade}
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

export default withRouter(observer(WriteSchoolContainer));