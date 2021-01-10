import React from "react";
import "./WriteSchool.scss";
import WriteContent from "components/common/WriteContent";
import { useEffect } from "react";

interface WriteSchoolProps {
  school: string;
  setSchool: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WriteSchool = ({
  school,
  setSchool,
  page,
  nextPage,
  prevPage,
}: WriteSchoolProps) => {
  return (
    <>
      <WriteContent
        title="출신학교 및 학력을 입력해 주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div className="school">
          <div className="school-area">
            <label className="school-area-label">졸업구분</label>
            <div className="school-area-select">
              <label className="school-area-select-box">
                졸업예정
                <input
                  type="radio"
                  name="school"
                  value="schedule"
                  className="school-area-select-box-selectinput"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </label>
              <label className="school-area-select-box">
                졸업생
                <input
                  type="radio"
                  name="school"
                  value="graduation"
                  className="school-area-select-box-selectinput"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </label>
              <label className="school-area-select-box">
                고입검정
                <input
                  type="radio"
                  name="school"
                  value="examination"
                  className="school-area-select-box-selectinput"
                  onChange={(e) => setSchool(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        {school === "schedule" ? (
          <div className="school">
            <div className="school-schedule">
              <div className="school-schedule-box">
                <label>출신 중학교명</label>
                <input type="text" className="school-schedule-box-textInput" />
              </div>
              <div className="school-schedule-box">
                <label>NEIS 학교 번호</label>
                <input type="text" className="school-schedule-box-textInput" />
              </div>
            </div>

            <div className="school-schedule">
              <div className="school-schedule-box">
                <div className="school-schedule-box-area">
                  <div className="school-schedule-box-area-column">
                    <label>지역명(시도)</label>
                    <input type="text" className="school-schedule-box-area-selectinput" />
                  </div>

                  <div className="school-schedule-box-area-column">
                    <label>시군구</label>
                    <input type="text" className="school-schedule-box-area-selectinput" />
                  </div>
                </div>
              </div>
              <div className="school-schedule-box">
                <label>NEIS 학교 번호</label>
                <div className="student-select-box-area">
                  <input type="text" className="student-select-box-area-Input5" />
                  <input type="text" className="student-select-box-area-Input6" />
                  <input type="text" className="student-select-box-area-Input6" />
                </div>
              </div>
            </div>

            <div className="school-schedule">
              <div className="school-schedule-box">
                <label>담임 성명</label>
                <input type="text" className="school-schedule-box-textInput" />
              </div>
              <div className="school-schedule-box">
                <label>담임 연락처</label>
                <div className="student-select-box-area">
                  <input type="text" className="student-select-box-area-Input5" />
                  <input type="text" className="student-select-box-area-Input6" />
                  <input type="text" className="student-select-box-area-Input6" />
                </div>
              </div>
            </div>
          </div>
        ) : school === "graduation" ? (
          <>
            <div className="school">
              <div className="school-schedule">
                <div className="school-schedule-box">
                  <label>출신 중학교명</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
                <div className="school-schedule-box">
                  <label>NEIS 학교 번호</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
              </div>

              <div className="school-schedule">
                <div className="school-schedule-box">
                  <div className="school-schedule-box-area">
                    <div className="school-schedule-box-area-column">
                      <label>지역명(시도)</label>
                      <input
                        type="text"
                        className="school-schedule-box-area-selectinput"
                      />
                    </div>

                    <div className="school-schedule-box-area-column">
                      <label>시군구</label>
                      <input
                        type="text"
                        className="school-schedule-box-area-selectinput"
                      />
                    </div>
                  </div>
                </div>
                <div className="school-schedule-box">
                  <label>NEIS 학교 번호</label>
                  <div className="student-select-box-area">
                    <input type="text" className="student-select-box-area-Input5" />
                    <input type="text" className="student-select-box-area-Input6" />
                    <input type="text" className="student-select-box-area-Input6" />
                  </div>
                </div>
              </div>

              <div className="school-schedule">
                <div className="school-schedule-box">
                  <label>담임 성명</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
                <div className="school-schedule-box">
                  <label>담임 연락처</label>
                  <div className="student-select-box-area">
                    <input type="text" className="student-select-box-area-Input5" />
                    <input type="text" className="student-select-box-area-Input6" />
                    <input type="text" className="student-select-box-area-Input6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="school">
              <div className="school-area">
                <label className="school-area-label">졸업년도</label>
                <input type="text" className="school-area-textInput" />
              </div>
            </div>
          </>
        ) : school === "examination" ? (
          <>
            <div className="school">
              <div className="school-schedule">
                <div className="school-schedule-box">
                  <label>출신 중학교명</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
                <div className="school-schedule-box">
                  <label>NEIS 학교 번호</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
              </div>

              <div className="school-schedule">
                <div className="school-schedule-box">
                  <div className="school-schedule-box-area">
                    <div className="school-schedule-box-area-column">
                      <label>지역명(시도)</label>
                      <input
                        type="text"
                        className="school-schedule-box-area-selectinput"
                      />
                    </div>

                    <div className="school-schedule-box-area-column">
                      <label>시군구</label>
                      <input
                        type="text"
                        className="school-schedule-box-area-selectinput"
                      />
                    </div>
                  </div>
                </div>
                <div className="school-schedule-box">
                  <label>NEIS 학교 번호</label>
                  <div className="student-select-box-area">
                    <input type="text" className="student-select-box-area-Input5" />
                    <input type="text" className="student-select-box-area-Input6" />
                    <input type="text" className="student-select-box-area-Input6" />
                  </div>
                </div>
              </div>

              <div className="school-schedule">
                <div className="school-schedule-box">
                  <label>담임 성명</label>
                  <input type="text" className="school-schedule-box-textInput" />
                </div>
                <div className="school-schedule-box">
                  <label>담임 연락처</label>
                  <div className="student-select-box-area">
                    <input type="text" className="student-select-box-area-Input5" />
                    <input type="text" className="student-select-box-area-Input6" />
                    <input type="text" className="student-select-box-area-Input6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="school">
              <div className="school-area">
                <label className="school-area-label">졸업년도</label>
                <input type="text" className="school-area-textInput" />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </WriteContent>
    </>
  );
};

export default WriteSchool;
