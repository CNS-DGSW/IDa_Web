import React from "react";
import "./WriteSchool.scss";
import WriteContent from "components/common/WriteContent";
import Grade from "util/enums/Grade";
import Modal from "components/common/Modal";
import City from "models/City";
import SearchSchoolContainer from "containers/SearchSchool/SearchSchoolContainer";

interface WriteSchoolProps {
  gradeType: Grade | null;
  handleGrade: (Grade: Grade | null) => void;
  cityLocation: string;
  setCityLocation: React.Dispatch<React.SetStateAction<string>>;
  cityName: string;
  setCityName: React.Dispatch<React.SetStateAction<string>>;
  graduatedDate: string;
  setGraduatedDate: React.Dispatch<React.SetStateAction<string>>;
  schoolCode: string;
  setSchoolCode: React.Dispatch<React.SetStateAction<string>>;
  schoolName: string;
  setSchoolName: React.Dispatch<React.SetStateAction<string>>;
  schoolTel: string;
  setSchoolTel: React.Dispatch<React.SetStateAction<string>>;
  teacherName: string;
  setTeacherName: React.Dispatch<React.SetStateAction<string>>;
  teacherTel: string;
  setTeacherTel: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
  isChanged: boolean;
}

const WriteSchool = ({
  gradeType,
  handleGrade,
  cityLocation,
  setCityLocation,
  cityName,
  setCityName,
  graduatedDate,
  setGraduatedDate,
  schoolCode,
  setSchoolCode,
  schoolName,
  setSchoolName,
  schoolTel,
  setSchoolTel,
  teacherName,
  setTeacherName,
  teacherTel,
  setTeacherTel,
  onSave,
  isOpen,
  setIsOpen,
  setIsChanged,
  isChanged,
}: WriteSchoolProps) => {
  return (
    <>
      <WriteContent title="출신학교 및 학력을 입력해 주세요" onSave={onSave} isChanged={isChanged}>
        <div className="school">
          <div className="school-area">
            <label className="school-area-label">졸업구분</label>
            <div className="school-area-select">
              <label className="school-area-select-box">
                졸업예정
                <input
                  type="radio"
                  name="school"
                  value={Grade.UNGRADUATED}
                  className="school-area-select-box-selectinput"
                  onChange={() => {
                    handleGrade(Grade.UNGRADUATED);
                    setIsChanged(true);
                  }}
                  checked={Grade.UNGRADUATED === gradeType}
                />
              </label>
              <label className="school-area-select-box">
                졸업생
                <input
                  type="radio"
                  name="school"
                  value={Grade.GRADUATED}
                  className="school-area-select-box-selectinput"
                  onChange={() => {
                    handleGrade(Grade.GRADUATED);
                    setIsChanged(true);
                  }}
                  checked={Grade.GRADUATED === gradeType}
                />
              </label>
              <label className="school-area-select-box">
                고입검정
                <input
                  type="radio"
                  name="school"
                  value={Grade.GED}
                  className="school-area-select-box-selectinput"
                  onChange={() => {
                    handleGrade(Grade.GED);
                    setIsChanged(true);
                  }}
                  checked={Grade.GED === gradeType}
                />
              </label>
            </div>
          </div>
        </div>

        {(gradeType === Grade.UNGRADUATED || gradeType === Grade.GRADUATED) && (
          <div className="school">
            {isOpen === true && (
              <Modal onClose={() => setIsOpen(false)}>
                <SearchSchoolContainer
                  setIsOpen={setIsOpen}
                  setSchoolName={setSchoolName}
                  setSchoolTel={setSchoolTel}
                  setSchoolCode={setSchoolCode}
                  setIsChanged={setIsChanged}
                />
              </Modal>
            )}
            <div className="school-schedule">
              <div className="school-schedule-box">
                <label>출신 중학교명</label>
                <div className="school-schedule-box-search">
                  <input
                    maxLength={45}
                    type="text"
                    className="school-schedule-box-search-textInput"
                    value={schoolName}
                    onChange={(e) => {
                      setSchoolName(e.target.value);
                      setIsChanged(true);
                    }}
                  />

                  <div onClick={() => setIsOpen(true)}>학교검색</div>
                </div>
              </div>
              <div className="school-schedule-box">
                <label>NEIS 학교 번호</label>
                <input
                  type="text"
                  className="school-schedule-box-textInput"
                  value={schoolCode}
                  maxLength={10}
                  onChange={(e) => {
                    setSchoolCode(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>

            <div className="school-schedule">
              <div className="school-schedule-box">
                <div className="school-schedule-box-area">
                  <div className="school-schedule-box-area-column">
                    <label>지역명(시도)</label>
                    <select
                      value={cityName}
                      onChange={(e) => {
                        setIsChanged(true);
                        setCityName(e.target.value);
                      }}
                      className="school-schedule-box-area-selectinput"
                    >
                      <option>선택해주세요</option>
                      {City.map((res, idx) => {
                        return (
                          <option key={idx} value={res.cityName}>
                            {res.cityName}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="school-schedule-box-area-column">
                    <label>시군구</label>
                    <select
                      value={cityLocation}
                      onChange={(e) => {
                        setCityLocation(e.target.value);
                        setIsChanged(true);
                      }}
                      className="school-schedule-box-area-selectinput"
                    >
                      <option>선택해주세요</option>
                      {cityName && (
                        <>
                          {City.find((city) => {
                            if (cityName === city.cityName) {
                              return true;
                            }
                          })?.cityLocation.map((res, idx) => {
                            return <option key={idx}>{res}</option>;
                          })}
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="school-schedule-box">
                <label>학교 연락처</label>
                <div className="student-select-box-area">
                  <input
                    type="text"
                    maxLength={20}
                    className="student-select-box-area-textInput"
                    value={schoolTel}
                    onChange={(e) => {
                      setSchoolTel(e.target.value);
                      setIsChanged(true);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="school-schedule">
              <div className="school-schedule-box">
                <label>담임 성명</label>
                <input
                  maxLength={45}
                  type="text"
                  className="school-schedule-box-textInput"
                  value={teacherName}
                  onChange={(e) => {
                    setTeacherName(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
              <div className="school-schedule-box">
                <label>담임 연락처</label>
                <div className="student-select-box-area">
                  <input
                    type="text"
                    maxLength={20}
                    className="student-select-box-area-textInput"
                    value={teacherTel}
                    onChange={(e) => {
                      setTeacherTel(e.target.value);
                      setIsChanged(true);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {gradeType === Grade.GRADUATED && (
          <div className="school">
            <div className="school-area">
              <label className="school-area-label">졸업년도</label>
              <input
                type="text"
                maxLength={4}
                className="school-area-textInput"
                value={graduatedDate}
                onChange={(e) => setGraduatedDate(e.target.value)}
              />
            </div>
          </div>
        )}
        {gradeType === Grade.GED && (
          <>
            <div className="school">
              <div className="school-area">
                <label className="school-area-label">합격년도</label>
                <input
                  type="text"
                  maxLength={4}
                  className="school-area-textInput"
                  value={graduatedDate}
                  onChange={(e) => {
                    setGraduatedDate(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </WriteContent>
    </>
  );
};

export default WriteSchool;
