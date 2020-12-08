import React from "react";
import WriteHeader from "../common/WriteHeader";
import WriteContent from "../common/WriteContent";
import "./Write.scss";

interface WriteProps {}

const Write = ({}: WriteProps) => {
  return (
    <>
      <div className="write">
        <div className="write-box">
          <WriteHeader />
          <WriteContent title={"지원자의 정보를 입력해 주세요"}>
            <div className="group">
              <label>성명</label>
              <input type="text" className="group-textInput" />
            </div>
          </WriteContent>
        </div>
      </div>
    </>
  );
};

export default Write;
