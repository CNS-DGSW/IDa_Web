import React from "react";
import "./WriteGrades.scss";
import WriteContent from "../common/WriteContent";

interface WriteGradesProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WriteGrades = ({ page, nextPage, prevPage }: WriteGradesProps) => {
  return (
    <>
      <WriteContent
        title="성적알림표를 작성해주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div></div>
      </WriteContent>
    </>
  );
};

export default WriteGrades;
