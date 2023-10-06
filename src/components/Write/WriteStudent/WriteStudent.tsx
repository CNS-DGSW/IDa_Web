import React from "react";
import Sex from "util/enums/Sex";
import WriteContent from "../../common/WriteContent";
import "./WriteStudent.scss";

interface WriteStudentProps {
  onSave: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  birth: string;
  setBirth: React.Dispatch<React.SetStateAction<string>>;
  sex: Sex | null;
  setSex: React.Dispatch<React.SetStateAction<Sex | null>>;
  studentTel: string;
  setStudentTel: React.Dispatch<React.SetStateAction<string>>;
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

const WriteStudent = ({
  onSave,
  name,
  setName,
  birth,
  setBirth,
  sex,
  setSex,
  studentTel,
  setStudentTel,
  isChanged,
  setIsChanged,
}: WriteStudentProps) => {
  return (
    <>
      <WriteContent
        title="지원자 정보를 입력해 주세요"
        isChanged={isChanged}
        onSave={onSave}
      >
        <div className="student">
          <div className="student-text">
            <label className="student-text-label">성명</label>
            <input
              type="text"
              maxLength={45}
              className="student-text-textInput"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
                setIsChanged(true);
              }}
            />
          </div>
          <div className="student-select">
            <div className="student-select-box">
              <label className="student-select-box-label">생년월일</label>
              <div className="student-select-box-area">
                <input
                  type="date"
                  className="student-select-box-area-textInput"
                  value={birth}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setBirth(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>
            <div className="student-select-box">
              <label className="student-select-box-label">성별</label>
              <div className="student-select-box-area">
                <label className="student-select-box-area-sex">
                  남자
                  <input
                    type="radio"
                    name="studentSex"
                    value={Sex.M}
                    className="student-select-box-area-sex-sexinput"
                    onChange={(e) => {
                      setSex(Sex.M);
                      setIsChanged(true);
                    }}
                    checked={sex === Sex.M}
                  />
                </label>
                <label className="student-select-box-area-sex">
                  여자
                  <input
                    type="radio"
                    name="studentSex"
                    value={Sex.W}
                    className="student-select-box-area-sex-sexinput"
                    onChange={(e) => {
                      setSex(Sex.W);
                      setIsChanged(true);
                    }}
                    checked={sex === Sex.W}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="student-select">
            <div className="student-select-box">
              <label className="student-select-box-label">휴대폰</label>
              <div className="student-select-box-area">
                <input
                  onPaste={() => false}
                  autoComplete="off"
                  maxLength={13}
                  type="text"
                  className="student-select-box-area-textInput"
                  value={studentTel}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setStudentTel(e.target.value);
                    setIsChanged(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteStudent;
