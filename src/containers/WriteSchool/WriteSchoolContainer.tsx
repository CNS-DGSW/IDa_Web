import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useStore from "lib/hooks/useStore";
import WriteSchool from "../../components/WriteSchool";
import { SchoolInfoResponse } from "util/types/Response";
import { useHistory } from "react-router-dom";

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

  const onSave = useCallback(() => {
    console.log(isChanged);
    if (
      cityLocation !== "" &&
      cityName !== "" &&
      gradeType !== null &&
      graduatedDate !== "" &&
      schoolCode !== "" &&
      schoolName !== "" &&
      schoolTel !== "" &&
      teacherName !== "" &&
      teacherTel !== ""
    ) {
      editSchoolInfo(
        cityLocation,
        cityName,
        gradeType,
        graduatedDate,
        schoolCode,
        schoolName,
        schoolTel,
        teacherName,
        teacherTel
      );
      setIsChanged(false);
      return true;
    } else {
      return false;
    }
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
        if (err.message.includes("401")) {
          history.push("/login");
        }
      });
  }, []);

  useEffect(() => {
    getSchoolInfoCallback();
    console.log(
      cityLocation,
      cityName,
      gradeType,
      graduatedDate,
      schoolCode,
      schoolName,
      schoolTel,
      teacherName,
      teacherTel
    );
  }, []);

  useEffect(() => {
    if (schoolTel) {
      if (schoolTel.length === 10) {
        setSchoolTel(schoolTel.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
      }
      if (schoolTel.length === 13) {
        setSchoolTel(
          schoolTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
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
          teacherTel.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
        );
      }
    }
  }, [teacherTel]);

  return (
    <>
      <WriteSchool
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
      ></WriteSchool>
    </>
  );
};

export default observer(WriteSchoolContainer);
