import React from "react";
import "./WriteMember.scss";
import WriteContent from "components/common/WriteContent";

interface WriteMemberProps {}

const WriteMember = ({}: WriteMemberProps) => {
  return (
    <>
      <div className="form">
        <div className="form-box">
          <WriteContent title="인적사항" children="지원자와 보호자의 정보입력" />
          <div className="form-box-info">
            <WriteContent title="지원자" children="" />
            <div className="form-box-info-area">
              <div>
                <div className="form-box-inputgroup">
                  <label>성명</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>생년월일</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>성별</label>
                  <input />
                </div>
              </div>

              <div>
                <div className="form-box-inputgroup">
                  <label>집전화</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>휴대전화</label>
                  <input />
                </div>
              </div>
            </div>
          </div>

          <div className="form-box-info">
            <WriteContent title="보호자" children="" />
            <div className="form-box-info-area">
              <div>
                <div className="form-box-inputgroup">
                  <label>성명</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>관계</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>주소</label>
                  <input />
                </div>
              </div>

              <div>
                <div className="form-box-inputgroup">
                  <label>집전화</label>
                  <input />
                </div>

                <div className="form-box-inputgroup">
                  <label>휴대전화</label>
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="photo">
          <div className="photo-content"></div>
          <div className="photo-btn">사진등록</div>
          <div className="photo-text">
            * 2MB 이내의 jpg, jpeg, gif 사진을 <br />
            등록해주세요.
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteMember;
