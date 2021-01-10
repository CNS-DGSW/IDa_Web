import React from "react";
import WriteContent from "../common/WriteContent";
import "./WriteStudent.scss";

interface WriteStudentProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WriteStudent = ({ page, nextPage, prevPage }: WriteStudentProps) => {
  return (
    <>
      <WriteContent
        title="지원자 정보를 입력해 주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div className="student">
          <div className="student-text">
            <label className="student-text-label">성명</label>
            <input type="text" className="student-text-textInput" />
          </div>
          <div className="student-select">
            <div className="student-select-box">
              <label className="student-select-box-label">생년월일</label>
              <div className="student-select-box-area">
                <input type="text" className="student-select-box-area-Input7" />
                <input type="text" className="student-select-box-area-Input5" />
                <input type="text" className="student-select-box-area-Input5" />
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
                    className="student-select-box-area-sex-sexinput"
                  />
                </label>
                <label className="student-select-box-area-sex">
                  여자
                  <input
                    type="radio"
                    name="studentSex"
                    className="student-select-box-area-sex-sexinput"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="student-select">
            <div className="student-select-box">
              <label className="student-select-box-label">집전화</label>
              <div className="student-select-box-area">
                <input type="text" className="student-select-box-area-Input5" />
                <input type="text" className="student-select-box-area-Input6" />
                <input type="text" className="student-select-box-area-Input6" />
              </div>
            </div>
            <div className="student-select-box">
              <label className="student-select-box-label">휴대폰</label>
              <div className="student-select-box-area">
                <input type="text" className="student-select-box-area-Input5" />
                <input type="text" className="student-select-box-area-Input6" />
                <input type="text" className="student-select-box-area-Input6" />
              </div>
            </div>
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteStudent;
