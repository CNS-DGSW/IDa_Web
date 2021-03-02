import Convertor from "lib/Convertor";
import moment from "moment";
import React from "react";
import ApplyDetail from "util/enums/ApplyDetail";
import "./WritePrintSchool.scss";

interface WritePrintSchoolProps {
  applyDetailType: ApplyDetail | null;
  schoolName: string;
}

const WritePrintSchool = ({
  applyDetailType,
  schoolName,
}: WritePrintSchoolProps) => {
  return (
    <div className="print-school">
      <div className="print-school-title">학교장 추천서</div>
      <div className="print-school-content">
        <span></span>위 학생은 소프트웨어 분야에 소질과 적성이 있고 귀교의
        교육과정을 이수하기에 충분하다고 판단되어 특별전형 (
        {Convertor.ApplyDetailTypeInfo(applyDetailType)})의 지원자로 추천합니다.
      </div>
      <div className="print-school-date">
        {moment().format("yyyy년 MM월 DD일")}
      </div>
      <div className="print-school-footer">{schoolName}장 (직인)</div>
    </div>
  );
};

export default WritePrintSchool;
