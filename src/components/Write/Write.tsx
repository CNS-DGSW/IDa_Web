import React from "react";
import WriteTitle from "components/common/WriteTitle";
import WriteContent from "components/common/WriteContent";
import WriteMember from "components/WriteMember";
import WriteSchool from "components/WriteSchool";
import WriteAdmission from "components/WriteAdmission";
import WriteChoose from "components/WriteChoose";

import "./Write.scss";

interface WriteProps {}

const Write = ({}: WriteProps) => {
  return (
    <>
      <div className="write">
        <div className="write-box">
          <WriteTitle />
          <div className="write-formbox">
            <WriteContent title="원서작성" children="원서 및 성적 입력" />
            <div className="write-formbox-form">
              <div className="write-formbox-form-menu">
                <div>입학원서</div>
                <div>성적알림표</div>
                <div>자기소개서 및 학업계획서</div>
              </div>
              <div className="write-formbox-form-area">
                <WriteMember />
                <WriteSchool />
                <WriteAdmission />
                <WriteChoose />
                <div className="write-formbox-form-btnarea">
                  <div className="write-formbox-form-btnarea-btn">원서저장</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
