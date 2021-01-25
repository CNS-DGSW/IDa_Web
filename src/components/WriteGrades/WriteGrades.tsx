import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../common/WriteContent";

interface WriteGradesProps {}

const WriteGrades = ({}: WriteGradesProps) => {
  return (
    <>
      <WriteContent title="성적알림표를 작성해주세요" onSave={() => console.log(1)}>
        <div></div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
