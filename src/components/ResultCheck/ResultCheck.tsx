import Button from "components/common/Button";
import React from "react";
import "./ResultCheck.scss";

interface ResultCheckProps {}

const ResultCheck = ({}: ResultCheckProps) => {
  return (
    <>
      <div className="ResultCheck">
        <div className="ResultCheck-status">
          <span className="ResultCheck-status-title">접수현황</span>
          <div className="ResultCheck-status-web check">
            <div className="ResultCheck-status-web-span check-span">
              <span>인터넷 원서 접수</span>
            </div>
            <div className="ResultCheck-status-web-result check-result">완료</div>
          </div>
          <div className="ResultCheck-status-post check">
            <div className="ResultCheck-status-post-span check-span">
              <span>우편 원서 접수</span>
            </div>
            <div className="ResultCheck-status-post-result check-result">미완료</div>
          </div>
        </div>
        <div className="ResultCheck-result">
          <span className="ResultCheck-result-title">원서 접수 결과</span>
          <Button>결과 확인</Button>
        </div>
      </div>
    </>
  );
};

export default ResultCheck;
