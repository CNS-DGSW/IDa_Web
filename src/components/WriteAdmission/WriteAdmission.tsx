import React from "react";
import "./WriteAdmission.scss";
import WriteContent from "../common/WriteContent";

interface WriteAdmissionProps {}

const WriteAdmission = ({}: WriteAdmissionProps) => {
  return (
    <>
      <WriteContent title="전형 및 그에 따른 해당사항을 선택해주세요" idx="5">
        <div></div>
      </WriteContent>
    </>
  );
};

export default WriteAdmission;
