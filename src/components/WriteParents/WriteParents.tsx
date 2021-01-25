import React from "react";
import WriteContent from "../common/WriteContent";
import "./WriteParents.scss";

interface WriteParentsProps {}

const WriteParents = ({}: WriteParentsProps) => {
  return (
    <>
      <WriteContent title="보호자 정보를 입력해 주세요" onSave={() => console.log(1)}>
        <div className="parent">
          <div className="parent-select">
            <div className="parent-select-box">
              <label>성명</label>
              <div className="parent-select-box-area">
                <input type="text" className="parent-select-box-area-textInput" />
              </div>
            </div>
            <div className="parent-select-box">
              <label>지원자와의 관계</label>
              <div className="parent-select-box-area">
                <input type="text" className="parent-select-box-area-textInput" />
              </div>
            </div>
          </div>
          <div className="parent-select">
            <div className="parent-select-box">
              <label>집전화</label>
              <div className="parent-select-box-area">
                <input type="text" className="parent-select-box-area-Input5" />
                <input type="text" className="parent-select-box-area-Input6" />
                <input type="text" className="parent-select-box-area-Input6" />
              </div>
            </div>
            <div className="parent-select-box">
              <label>휴대폰</label>
              <div className="parent-select-box-area">
                <input type="text" className="parent-select-box-area-Input5" />
                <input type="text" className="parent-select-box-area-Input6" />
                <input type="text" className="parent-select-box-area-Input6" />
              </div>
            </div>
          </div>
          <div className="parent-text">
            <label>주소</label>
            <input type="text" className="parent-text-textInput" />
            <input type="text" className="parent-text-textInput" />
          </div>
        </div>
      </WriteContent>
    </>
  );
};

export default WriteParents;
