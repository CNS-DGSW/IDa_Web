import React from "react";
import "./WriteSchool.scss";
import WriteContent from "components/common/WriteContent";

interface WriteSchoolProps {}

const WriteSchool = ({}: WriteSchoolProps) => {
  return (
    <>
      <WriteContent title="출신학교 및 학력을 입력해 주세요" idx="4">
        <div></div>
      </WriteContent>
    </>
  );
};

export default WriteSchool;
