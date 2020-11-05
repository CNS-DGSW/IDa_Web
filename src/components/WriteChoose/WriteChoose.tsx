import React from "react";
import "./WriteChoose.scss";

interface WriteChooseProps {}

const WriteChoose = ({}: WriteChooseProps) => {
  return (
    <>
      <div className="Choose">
        <div className="Choose-title">선택사항</div>
        <div className="Choose-info">
          본 설문은 지원자들의 지원 동기, 지원 결정에 영향을 끼친 사람 등을 알아보기 위한 것으로 <br />
          전형에는 아무런 영향을 미치지 않습니다. 설문에 참여해 주셔서 감사합니다.
        </div>
        <div className="Choose-box">
          <label>1) 학생의 지원동기</label>
          <div>선택해주세요.</div>
        </div>

        <div className="Choose-box">
          <label>2) 학생의 지원결정에 영향을 끼친사람</label>
          <div>선택해주세요.</div>
        </div>

        <div className="Choose-box">
          <label>3) 본교 지원 결정 시 학교애 대한 이해도</label>
          <div>선택해주세요.</div>
        </div>

        <div className="Choose-box">
          <label>4) 본교를 어떻게 알게 되었는지</label>
          <div>선택해주세요.</div>
        </div>

        <div className="Choose-box">
          <label>5) 본인이 취업하고 싶은 진로희망</label>
          <div>선택해주세요.</div>
        </div>
      </div>
    </>
  );
};

export default WriteChoose;
