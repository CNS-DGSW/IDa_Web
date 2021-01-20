import React from "react";
import WriteContent from "../common/WriteContent";
import "./WriteIntroduction.scss";

interface WriteIntroductionProps {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
}

const WriteIntroduction = ({ page, nextPage, prevPage }: WriteIntroductionProps) => {
  return (
    <>
      <WriteContent
        title="자기소개서 및 학업계획서를 작성(제출)해주세요"
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      >
        <div></div>
      </WriteContent>
    </>
  );
};

export default WriteIntroduction;
