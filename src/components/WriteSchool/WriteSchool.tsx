import React from "react";
import "./WriteSchool.scss";
import WriteContent from "components/common/WriteContent";

interface WriteSchoolProps {}

const WriteSchool = ({}: WriteSchoolProps) => {
  return (
    <>
      <div className="School">
        <WriteContent title="출신학교 및 학력" children="출신 중학교 정보 입력 (검정고시 입력 제외)" />
        <div className="School-box">
          <div>
            <div className="School-box-inputgroup">
              <div>
                <label>학교명</label>
                <input />
              </div>
              <div className="School-box-inputgroup-comment">
                <p>*검색되지 않으면 직접 입력해주세요.</p>
              </div>
            </div>

            <div className="School-box-inputgroup">
              <div>
                <label>학교번호</label>
                <input />
              </div>
              <div className="School-box-inputgroup-comment">
                <p>*중학교 NEIS 학교 번호를 입력해주세요.</p>
              </div>
            </div>

            <div className="School-box-inputgroup">
              <div>
                <label>담임성명</label>
                <input />
              </div>
            </div>

            <div className="School-box-inputgroup">
              <div>
                <label>담임연락처</label>
                <input />
              </div>
              <div className="School-box-inputgroup-comment">
                <p>
                  *졸업생, 검정고시 힙격자는 <br />
                  보호자 연락처를 입력해주세요.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="School-box-inputgroup">
              <div>
                <label>지역명</label>
                <input />
              </div>
            </div>

            <div className="School-box-inputgroup">
              <div>
                <label>시군구</label>
                <input />
              </div>
            </div>

            <div className="School-box-inputgroup">
              <div>
                <label>집전화</label>
                <input />
              </div>
            </div>
          </div>

          <div>
            <div className="School-box-inputgroup">
              <div className="School-box-inputgroup-Graduation">
                <label>졸업구분</label>
                <div>
                  <input />
                  <input />
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteSchool;
